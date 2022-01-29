import * as fs from "fs"
import * as https from "https"
import * as mkdirp from "mkdirp"
import * as path from "path"
import * as rimraf from "rimraf"

const hash = "8cf9b33b1f94360870f6d46c25c62f49bad27974"
const version = "4.6.0-ets.20220128"
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
