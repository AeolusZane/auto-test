it('<%name%>', () => {
    expect.assertions(1);
    return ssim('<%main%>', '<%test%>').then(r => {
        console.log('设置最小精确度:',precision,'相似度:',r.ssim,'🐱')
        expect(r.ssim > precision).toBe(true);
    })
});