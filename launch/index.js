import puppeteer from "puppeteer";

async function launchAndGet(url){

    const browser = await puppeteer.launch({
        product: 'chrome',
        headless: false,
        executablePath: "C:/Users/Pavan/AppData/Local/Google/Chrome SxS/Application/chrome.exe",
        userDataDir: "C:/Users/Pavan/AppData/Local/Google/Chrome SxS/User Data",
        args: ['--start-maximized',
        '--profile-directory=Default'
        ],
    })

    const [page] = await (browser.pages());

    await page.goto(url);

    await page.setViewport({
        width:1280,
        height:580
    });

    return page;
}

export default launchAndGet;

