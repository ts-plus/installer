#!/bin/sh
COMMIT="cda4e85b3b8c2f327fce383a8f5995e607f1893c"
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
mv typescript*.tgz ../../compiler/typescript.tgz
