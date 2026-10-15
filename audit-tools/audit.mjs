import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const widths = [1440, 1024, 768, 390];
const url = 'https://clarify-template.webflow.io/';
const outDir = path.resolve(process.cwd(), '../');

async function run() {
  console.log('Starting Playwright Audit...');
  
  // Create directories
  widths.forEach(w => {
    fs.mkdirSync(path.join(outDir, `reference/screens/${w}`), { recursive: true });
  });
  fs.mkdirSync(path.join(outDir, 'docs'), { recursive: true });

  const browser = await chromium.launch();
  const auditData = {
    layout: {},
    tokens: {},
    motion: [],
    assets: [],
    nav: {}
  };

  for (const width of widths) {
    console.log(`Auditing at width: ${width}px...`);
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });

    // Ensure page is fully loaded and scroll to trigger animations
    for (let i = 0; i < 15; i++) {
      await page.evaluate(() => window.scrollBy(0, 500));
      await page.waitForTimeout(200);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Capture Nav initial
    const nav = await page.$('.navbar, header, nav');
    if (nav) {
      await nav.screenshot({ path: path.join(outDir, `reference/screens/${width}/00-nav-initial.png`) });
      await page.evaluate(() => window.scrollBy(0, 1000));
      await page.waitForTimeout(500);
      await nav.screenshot({ path: path.join(outDir, `reference/screens/${width}/00-nav-scrolled.png`) });
      await page.evaluate(() => window.scrollTo(0, 0));
    }

    // Capture Sections & Measure Layout
    const sections = await page.evaluate(() => {
      const els = document.querySelectorAll('.section, section, .page-wrapper > div');
      return Array.from(els).map((el, i) => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return {
          id: i + 1,
          tag: el.tagName.toLowerCase(),
          className: el.className,
          height: rect.height,
          padding: `${style.paddingTop} ${style.paddingRight} ${style.paddingBottom} ${style.paddingLeft}`,
          maxWidth: style.maxWidth,
          display: style.display,
          gridTemplateColumns: style.gridTemplateColumns,
          gap: style.gap,
          justifyContent: style.justifyContent,
          alignItems: style.alignItems
        };
      });
    });

    auditData.layout[width] = sections;

    // Screenshots of sections
    const sectionHandles = await page.$$('.section, section, .page-wrapper > div');
    for (let i = 0; i < sectionHandles.length; i++) {
      try {
        const id = String(i + 1).padStart(2, '0');
        await sectionHandles[i].screenshot({ path: path.join(outDir, `reference/screens/${width}/${id}-section.png`) });
      } catch (e) {
        console.warn('Could not capture section', i, e.message);
      }
    }

    // Extract Tokens
    const tokens = await page.evaluate(() => {
      const getStyle = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const s = window.getComputedStyle(el);
        return {
          fontFamily: s.fontFamily,
          fontSize: s.fontSize,
          fontWeight: s.fontWeight,
          lineHeight: s.lineHeight,
          letterSpacing: s.letterSpacing,
          color: s.color,
          backgroundColor: s.backgroundColor,
          borderRadius: s.borderRadius
        };
      };
      
      const elements = {
        body: getStyle('body'),
        h1: getStyle('h1'),
        h2: getStyle('h2'),
        h3: getStyle('h3'),
        h4: getStyle('h4'),
        h5: getStyle('h5'),
        h6: getStyle('h6'),
        p: getStyle('p'),
        link: getStyle('a'),
        button: getStyle('.button, button'),
        card: getStyle('.card, .bg-brand-lightest-grey'),
      };
      return elements;
    });

    auditData.tokens[width] = tokens;
    
    if (width === 1440) {
      // One-time extractions (motion, assets, components)
      auditData.assets = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
          type: 'image',
          src: img.src,
          width: img.naturalWidth,
          height: img.naturalHeight,
          alt: img.alt
        }));
        const svgs = Array.from(document.querySelectorAll('svg')).map(svg => ({
          type: 'svg',
          width: svg.getAttribute('width') || svg.getBoundingClientRect().width,
          height: svg.getAttribute('height') || svg.getBoundingClientRect().height,
          classes: svg.getAttribute('class')
        }));
        const videos = Array.from(document.querySelectorAll('video')).map(v => ({
          type: 'video',
          src: v.currentSrc,
          autoplay: v.autoplay,
          loop: v.loop,
          muted: v.muted
        }));
        return [...imgs, ...svgs, ...videos];
      });

      auditData.motion = await page.evaluate(() => {
        const animatedEls = Array.from(document.querySelectorAll('[data-w-id]'));
        return animatedEls.map(el => ({
          tag: el.tagName,
          classes: el.className,
          wId: el.getAttribute('data-w-id')
        }));
      });
    }

    await context.close();
  }

  await browser.close();
  
  fs.writeFileSync(path.join(outDir, 'audit_data.json'), JSON.stringify(auditData, null, 2));
  console.log('Playwright Audit Complete. Data saved to audit_data.json');
}

run().catch(console.error);
