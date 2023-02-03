const ssim = require('../../bin/index.js').default;
const { precision } = require('../../config');

it('homepage/1.png', () => {
    expect.assertions(1);
    return ssim('./sources/main/homepage/1.png', './sources/test/homepage/1.png').then(r => {
        console.log('设置最小精确度:',precision,'相似度:',r.ssim,'🐱')
        expect(r.ssim > precision).toBe(true);
    })
});