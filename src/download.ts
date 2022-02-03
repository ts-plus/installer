import * as fs from "fs"
import * as https from "https"
import * as mkdirp from "mkdirp"
import * as path from "path"
import * as rimraf from "rimraf"

const hash = "bd91dcff21785c22a6d64a5758c7c75a41ebdca1"
const version = "4.6.0-ets.20220203"
const tgz = `https://raw.githubusercontent.com/ts-plus/typescript/${hash}/dev/typescript-${version}.tgz`

const target = path.join(__dirname, "..", "/compiler")

rimraf(target, (err) => {
  if (err) {
    console.error(err)
  } else {
    mkdirp(target).then(() => {
      const tsPath = path.join(target, "/typescript.tgz")
      const file = fs.createWriteStream(tsPath)

      https.get(tgz, (response) => {
        response.pipe(file).on("finish", () => {
          file.close()
        })
      })
    })
  }
})
