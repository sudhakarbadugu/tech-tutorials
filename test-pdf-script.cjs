const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function testPDFGeneration() {
  console.log('🧪 Starting PDF generation test...\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    acceptDownloads: true
  });
  const page = await context.newPage();

  try {
    console.log('📡 Navigating to https://judicial-geometry-salvation-murray.trycloudflare.com...');
    await page.goto('https://judicial-geometry-salvation-murray.trycloudflare.com', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    console.log('✅ Page loaded\n');

    await page.waitForSelector('.app', { timeout: 10000 });

    console.log('🖱️ Clicking "View Unit" button...');
    await page.click('button:has-text("View Unit")');
    await page.waitForTimeout(1000);
    console.log('✅ One Page View opened\n');

    await page.waitForSelector('.one-page-overlay', { timeout: 10000 });

    const downloadPath = path.join(__dirname, 'test-download.pdf');
    
    const [download] = await Promise.all([
      page.waitForEvent('download', { timeout: 60000 }),
      page.click('button:has-text("Download PDF")')
    ]);

    console.log('⏳ Waiting for download...');
    await download.saveAs(downloadPath);
    console.log(`✅ PDF downloaded to: ${downloadPath}\n`);

    const stats = fs.statSync(downloadPath);
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(1)} KB`);

    if (stats.size < 10000) {
      console.log('⚠️ WARNING: PDF file is very small - might be empty or single page!');
    } else {
      console.log('✅ PDF file has reasonable size\n');
    }

    const pdfBuffer = fs.readFileSync(downloadPath);
    const pageCount = (pdfBuffer.toString().match(/\/Type\s*\/Page\b/g) || []).length;
    console.log(`📄 Detected pages: ${pageCount}`);

    if (pageCount <= 1) {
      console.log('❌ FAIL: PDF appears to be single page!');
      process.exit(1);
    } else {
      console.log(`✅ PASS: PDF has ${pageCount} pages\n`);
    }

    fs.unlinkSync(downloadPath);
    console.log('🧹 Cleaned up test file\n');
    console.log('🎉 All tests passed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testPDFGeneration();
