import * as rimraf from 'rimraf';
import * as path from 'path';
import * as tar from 'tar';
import * as mkdirp from 'mkdirp';

const target = path.join(__dirname, "..", "/compiler")
const tsPath = path.join(target, "/typescript.tgz");

const originalTsFolder = path.join(
    require.resolve("typescript"),
    "../../"
)

rimraf(originalTsFolder, () => {
    mkdirp(originalTsFolder).then(() => tar.extract({
        file: tsPath,
        cwd: originalTsFolder,
        strip: 1
    }))
})