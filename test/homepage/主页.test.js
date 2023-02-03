const ssim = require('../../bin/index.js').default;
const { precision } = require('../../config');

it('homepage/主页.png', () => {
    expect.assertions(1);
    return ssim('./sources/main/homepage/主页.png', './sources/test/homepage/主页.png').then(r => {
        console.log('设置最小精确度:',precision,'相似度:',r.ssim,'🐱')
        expect(r.ssim > precision).toBe(true);
    })
});