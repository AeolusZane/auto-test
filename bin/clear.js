/**
 * 清空截图和test文件
 */

const fs = require('fs');
const all = process.argv.includes('--all');

function deleteall(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + '/' + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteall(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

deleteall('./sources/test');
deleteall('./test');
if (all) {
    deleteall('./sources/main');
}