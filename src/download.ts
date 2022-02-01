import * as fs from "fs"
import * as https from "https"
import * as mkdirp from "mkdirp"
import * as path from "path"
import * as rimraf from "rimraf"

const hash = "3509194fb3d624dbed524a9ef34ac5cf29a735a9"
const version = "4.6.0-ets.20220201"
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
