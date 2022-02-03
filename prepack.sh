#!/bin/sh
COMMIT="81eda00bfd33b0aee9293927439cdb058cefc8eb"
rm -rf tmp
mkdir tmp
cd tmp
git clone https://github.com/ts-plus/typescript.git --single-branch --branch main
cd typescript
git reset --hard $COMMIT
npm install
sh pack.sh
rm -rf ../../compiler
mkdir ../../compiler
mv typescript*.tgz ../compiler/typescript.tgz