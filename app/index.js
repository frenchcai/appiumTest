/*
 * @Description:
 * @Author: caifw
 * @Date: 2024-03-12 09:41:27
 * @LastEditors: caifawen caifw@gzyct.com
 * @LastEditTime: 2024-03-13 08:53:40
 */
const { remote } = require("webdriverio");

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  // 'appium:appPackage': 'com.tencent.android.qqdownloader',
  // 'appium:appActivity': 'com.tencent.pangu.link.SplashActivity',
  'appium:appPackage': 'com.moutai.mall',
  'appium:appActivity': '.module.splash.SplashActivity',
  // "appium:noReset": true, // 不复位数据
  // "appium:unicodeKeyboard": false // 隐藏键盘
};




const wdOpts = {
  hostname: "localhost",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const batteryItem = await driver.$('//android.widget.Button[@resource-id="com.tencent.android.qqdownloader:id/ri"]');
    await batteryItem.click();
    
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
