import * as https from 'https';
import * as fs from 'fs';
import * as rimraf from 'rimraf';
import * as path from 'path';
import * as mkdirp from 'mkdirp';

const tgz = "https://raw.githubusercontent.com/ts-plus/typescript/main/dev/typescript-4.6.0-ets.20220128.tgz"

const target = path.join(__dirname, "..", "/compiler")

rimraf(target, (err) => {
    if (err) {
        console.error(err);
    } else {
        mkdirp(target).then(() => {
            const tsPath = path.join(target, "/typescript.tgz");
            const file = fs.createWriteStream(tsPath);

            https.get(tgz, (response) => {
                response.pipe(file).on("finish", () => {
                    file.close();
                });
            });
        })
    }
})
