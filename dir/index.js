const glob = require('glob');
const fs = require('fs');
const vfs = require('vinyl-fs');
const file = fs.readFileSync('./template/index.js', 'utf8').toString();
const uuid = require('uuid').v4;

const it = fs.readFileSync('./template/it.js', 'utf8').toString();
glob.sync('./sources/main/**/*.png').map(i => {
    const path = i.split('/').slice(3).map(() => '..').join('/') + '/'
    const ssim = path + 'bin/index.js';
    const config = path + 'config';
    let header = file.toString().replace(/require\('<%ssim%>'\)/g, `require(\'${ssim}\')`);
    header = header.replace(/require\('<%config%>'\)/g, `require(\'${config}\')`);

    const test = i.replace('./sources/main/', './sources/test/');

    let content = it.replace(/<%name%>/g, i.replace('./sources/main/', ''))
        .replace(/<%main%>/g, i)
        .replace(/<%test%>/g, test);

    content = header + '\n\n' + content;

    const filePath = i.replace('./sources/main/', './test/').replace('.png', '.test.js');

    const filename = filePath.split('/').slice(-1)[0];
    const dir = filePath.split('/').slice(0, -1).join('/');

    fs.writeFileSync(filename, content);

    vfs.src(filename)
        .pipe(vfs.dest(dir))
        .on('end', () => {
            fs.unlinkSync(filename);
        });
})

