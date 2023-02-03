"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pngjs_1 = require("pngjs");
const image_ssim_1 = __importDefault(require("image-ssim"));
const fs_1 = __importDefault(require("fs"));
const loadImage = (file1, file2, done) => {
    const images = [];
    let width = 0;
    let height = 0;
    const onLoad = (img) => {
        images.push(img);
        if (images.length === 2) {
            done(images);
        }
    };
    const load = (filePath, done) => {
        fs_1.default.createReadStream(filePath)
            .pipe(new pngjs_1.PNG())
            .on('parsed', function () {
            // 统一长宽
            if (width === 0 && height === 0) {
                width = this.width;
                height = this.height;
            }
            ;
            done({
                data: this.data,
                width: width,
                height: height,
                channels: 4
            });
        });
    };
    load(file1, onLoad);
    load(file2, onLoad);
};
const isSameSize = (baseline, replay) => {
    return baseline.width == replay.width && baseline.height == replay.height;
};
exports.default = (baselineFilename, replayFilename) => {
    return new Promise(resolve => {
        loadImage(baselineFilename, replayFilename, (images) => {
            const baseline = images[0];
            const replay = images[1];
            if (isSameSize(baseline, replay)) {
                const res = image_ssim_1.default.compare(baseline, replay);
                isNaN(res.ssim) || isNaN(res.mcs) ?
                    resolve({ ssim: 0.1, mcs: 0.1 }) :
                    resolve(res);
            }
            else {
                resolve({ ssim: 0.1, mcs: 0.1 });
            }
        });
    });
};
