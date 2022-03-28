#!/bin/sh
COMMIT="6d1b1d249f6e62b6cab08c1dea6af95a86ce60b7"
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
