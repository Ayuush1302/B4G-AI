import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'http://localhost:5173/';
const outDir = path.resolve(__dirname, '../reference/qa/navbar');

async function run() {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  
  for (const width of [1440, 1024, 768, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
      
      const nav = await page.$('nav');
      if (nav) {
        await nav.screenshot({ path: path.join(outDir, `nav-initial-${width}.png`) });
        
        // Scroll down to trigger scroll state
        await page.evaluate(() => window.scrollBy(0, 500));
        await page.waitForTimeout(500); // Wait for transition
        
        await nav.screenshot({ path: path.join(outDir, `nav-scrolled-${width}.png`) });
      }
    } catch(e) {
      console.log(`Error loading page at ${width}px: `, e.message);
    }
    await context.close();
  }
  await browser.close();
  console.log('Navbar screenshots generated successfully.');
}

run().catch(console.error);
