const args = process.argv;

const type = args.includes('--standard') ? 'main' : 'test';

const server = args[args.indexOf('--server') + 1];

const key = args[args.indexOf('--key') + 1];
const user = key.split('/')[0];
const password = key.split('/')[1];
const dest = __filename.replace("/script/", `/sources/${type}/`).replace('.js', '.png');

describe('homepage2', function () {
    it('homepage2.test', function () {
        /**
         * 这块是自动登录的代码
         */
        browser
            .navigateTo(server)
            .useXpath() // every selector now must be xpath
            .click("/html/body/div[1]/div/div/div[2]/div/div/div[1]/div[1]/div[1]/div[1]/div[2]/input")
            .useCss() // we're back to CSS now
            .setValue('input[type=text]', user)
            .useXpath() // every selector now must be xpath
            .click("/html/body/div[1]/div/div/div[2]/div/div/div[1]/div[2]/div[1]/div[1]/div[2]/input")
            .useCss() // we're back to CSS now
            .setValue('input[type=password]', password)
            .useXpath()
            .click('/html/body/div[1]/div/div/div[2]/div/div/div[1]/div[4]/div/div[1]/div[2]/div')
            .useCss()
            .pause(2000)
            /**
             * 下面是登录后操作的内容
             */
            .useXpath()
            .click('/html/body/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/div[1]/div[1]/div')
            .pause(1000)
            .click('/html/body/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/div[2]/div/div/div[1]/div')
            .useCss()
            .pause(1000)
            .saveScreenshot(dest)
            .end();
    });
});