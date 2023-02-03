const ssim = require('../bin/index.js').default;
const { precision } = require('../config');
const ori = './data/ori.png';
const tests = {
    '不变': '1.png',
    '一项颜色变': '2.png',
    '图片整个变化': '3.png',
    '图片整个变化2': '4.png',
    '多项颜色变': '5.png',
    '变一个字“移出来了”': '6.png',
    '部分长宽变': '7.png',
    '部分长宽变2': '8.png',
    '部分长宽变3（图片尺寸微微变化）': '9.png',
    '随便加个新标签': '10.png',
};

// Object.entries(tests).forEach(([key, value]) => {
//     it(key, () => {
//         expect.assertions(1);
//         return ssim(ori, `./data/${value}`).then(r => {
//             expect(r.ssim > 0.99).toBe(true);
//         })
//     })
// });

it('不变', () => {
    expect.assertions(1);
    return ssim(ori, './data/1.png').then(r => {
        expect(r.ssim > precision).toBe(true);
    })
});

it('一项颜色变', () => {
    expect.assertions(1);
    return ssim(ori, './data/2.png').then(r => {
        expect(r.ssim > precision).toBe(true);
    })
});

it('图片整个变化', () => {
    expect.assertions(1);
    return ssim(ori, './data/3.png').then(r => {
        expect(r.ssim > precision).toBe(true);
    })
});

// it('图片整个变化2', () => {
//     expect.assertions(1);
//     return ssim(ori, './data/4.png').then(r => {
//         expect(r.ssim > precision).toBe(true);
//     })
// });

// it('多项颜色变', () => {
//     expect.assertions(1);
//     return ssim(ori, './data/5.png').then(r => {
//         expect(r.ssim > precision).toBe(true);
//     })
// });

// it('变一个字“移出来了”', () => {
//     expect.assertions(1);
//     return ssim(ori, './data/6.png').then(r => {
//         expect(r.ssim > precision).toBe(true);
//     })
// });

// it('部分长宽变', () => {
//     expect.assertions(1);
//     return ssim(ori, './data/7.png').then(r => {
//         expect(r.ssim > precision).toBe(true);
//     })
// });

// it('部分长宽变2', () => {
//     expect.assertions(1);
//     return ssim(ori, './data/8.png').then(r => {
//         expect(r.ssim > precision).toBe(true);
//     })
// });

// it('部分长宽变3（图片尺寸微微变化）', () => {
//     expect.assertions(1);
//     return ssim(ori, './data/9.png').then(r => {
//         expect(r.ssim > precision).toBe(true);
//     })
// });

// it('随便加个新标签', () => {
//     expect.assertions(1);
//     return ssim(ori, './data/10.png').then(r => {
//         expect(r.ssim > precision).toBe(true);
//     })
// });