const ssim = require('../../bin/index.js').default;
const { precision } = require('../../config');

it('homepage/2.png', () => {
    expect.assertions(1);
    return ssim('./sources/main/homepage/2.png', './sources/test/homepage/2.png').then(r => {
        console.log('最小精确度:',precision,'相似度:',r.ssim,'🐱')
        expect(r.ssim > precision).toBe(true);
    })
});