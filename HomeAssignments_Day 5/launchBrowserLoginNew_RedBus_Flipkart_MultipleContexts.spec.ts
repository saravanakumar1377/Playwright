import { test, chromium, webkit } from '@playwright/test';

test('Launch Edge browser - redbus', async () => {

  const edgeBrowser = await chromium.launch({
    channel: 'msedge',
    headless: false
  });

  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();

  await edgePage.goto('https://www.redbus.in');
  console.log('Page Title:', await edgePage.title());
  console.log('Page URL  :', edgePage.url());
  
  console.log('----------------------------------------');
  
  const webkitBrowser = await webkit.launch({
    headless: false
  });

  const webkitContext = await webkitBrowser.newContext();
  const webkitPage = await webkitContext.newPage();

  await webkitPage.goto('https://www.flipkart.com');

  console.log('Page Title:', await webkitPage.title());
  console.log('Page URL  :', webkitPage.url());

}); 