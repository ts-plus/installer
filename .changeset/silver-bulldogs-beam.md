---
"@tsplus/installer": patch
---

Configurable Module Discovery and Location Emitter (https://github.com/ts-plus/typescript/pull/89)

Requires a config like the following to be specified that tells the compiler how to map source files to traces and imports: 

```json
// tsplus.config.json
{
    "importMap": {
        "^(.*)/packages/([^/]*)/src(.*)/index\\.ts$": "@tsplus-test/$2$3",
        "^(.*)/packages/([^/]*)/src(.*)\\.ts$": "@tsplus-test/$2$3"
    },
    "traceMap": {
        "^(.*)/packages/([^/]*)/(.*)$": "(@tsplus-test/$2) $3"
    }
}
```

and linked to each tsconfig where either a main build happens or any project reference:

```json
// tsconfig.json
{
    "compilerOptions": {
        "tsPlusConfig": "../../tsplus.config.json"
    }
}
```

Notes: 
- TS+ will add imports in your code and it will use fully qualified imports like `@tsplus-tests/package/MyFile`
- It is your job to make sure every file is properly exported in your `package.json` exports.
- Each file should correspond to a unique import, to avoid ending up with circular references as much as possible