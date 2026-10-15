import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'http://localhost:5173/styleguide';
const outDir = path.resolve(__dirname, '../reference/styleguide_screens');

async function run() {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  
  const referenceData = JSON.parse(fs.readFileSync(path.join(__dirname, '../audit_data.json'), 'utf8'));

  for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 } });
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
      await page.screenshot({ path: path.join(outDir, `styleguide-${width}.png`), fullPage: true });

      // Extract styles from the styleguide elements
      const extracted = await page.evaluate(() => {
        const getStyle = (selector) => {
          const el = document.querySelector(selector);
          if (!el) return null;
          const s = window.getComputedStyle(el);
          return {
            fontSize: s.fontSize,
            color: s.color,
            fontFamily: s.fontFamily
          };
        };
        return {
          h1: getStyle('h1'),
          h2: getStyle('h2'),
          h3: getStyle('h3'),
          h4: getStyle('h4'),
          h5: getStyle('h5'),
          h6: getStyle('h6'),
          p: getStyle('p')
        };
      });

      console.log(`\n--- Comparison for width: ${width}px ---`);
      
      const refTokens = referenceData.tokens[width.toString()];
      const mismatches = [];

      for (const [tag, styles] of Object.entries(extracted)) {
        if (!styles || !refTokens[tag]) continue;
        const refSize = refTokens[tag].fontSize;
        const actSize = styles.fontSize;
        
        // Browsers might compute clamp values slightly differently due to rounding
        // but we can flag if they are wildly different.
        if (refSize !== actSize) {
          mismatches.push(`${tag} fontSize mismatch: Ref(${refSize}) vs Act(${actSize})`);
        }
      }

      if (mismatches.length === 0) {
        console.log("No mismatches found for typography!");
      } else {
        mismatches.forEach(m => console.log(m));
      }
      
    } catch(e) {
      console.log("Error loading page: ", e.message);
    }
    await context.close();
  }
  await browser.close();
}

run().catch(console.error);
