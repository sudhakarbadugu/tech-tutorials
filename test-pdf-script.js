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
    // Navigate to the deployed site
    console.log('📡 Navigating to https://judicial-geometry-salvation-murray.trycloudflare.com...');
    await page.goto('https://judicial-geometry-salvation-murray.trycloudflare.com', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    console.log('✅ Page loaded\n');

    // Wait for the app to render
    await page.waitForSelector('.app', { timeout: 10000 });

    // Click "View Unit" button
    console.log('🖱️ Clicking "View Unit" button...');
    await page.click('button[aria-label="View all topics in this unit"]');
    await page.waitForTimeout(1000);
    console.log('✅ One Page View opened\n');

    // Wait for the overlay
    await page.waitForSelector('.one-page-overlay', { timeout: 10000 });

    // Set up download listener
    const downloadPromise = new Promise((resolve, reject) => {
      context.on('page', async (newPage) => {
        // Handle download
      });
      
      // Alternative: intercept download via browser CDP
      let resolved = false;
      const timeout = setTimeout(() => {
        if (!resolved) {
          resolved = true;
          reject(new Error('Download timeout'));
        }
      }, 30000);

      page.on('download', async (download) => {
        if (resolved) return;
        resolved = true;
        clearTimeout(timeout);
        
        const downloadPath = path.join(__dirname, 'test-download.pdf');
        await download.saveAs(downloadPath);
        resolve(downloadPath);
      });
    });

    // Click Download PDF
    console.log('📥 Clicking "Download PDF" button...');
    await page.click('button[aria-label="Download as PDF"]');

    // Wait for download
    console.log('⏳ Waiting for download...');
    const downloadPath = await downloadPromise;
    console.log(`✅ PDF downloaded to: ${downloadPath}\n`);

    // Check file size
    const stats = fs.statSync(downloadPath);
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(1)} KB`);

    if (stats.size < 10000) {
      console.log('⚠️ WARNING: PDF file is very small - might be empty or single page!');
    } else {
      console.log('✅ PDF file has reasonable size\n');
    }

    // Read PDF and check page count (basic check)
    const pdfBuffer = fs.readFileSync(downloadPath);
    const pageCount = (pdfBuffer.toString().match(/\/Type\s*\/Page\b/g) || []).length;
    console.log(`📄 Detected pages: ${pageCount}`);

    if (pageCount <= 1) {
      console.log('❌ FAIL: PDF appears to be single page!');
      process.exit(1);
    } else {
      console.log(`✅ PASS: PDF has ${pageCount} pages\n`);
    }

    // Cleanup
    fs.unlinkSync(downloadPath);
    console.log('🧹 Cleaned up test file\n');
    console.log('🎉 All tests passed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testPDFGeneration();
