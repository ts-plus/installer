#!/bin/sh
COMMIT="1eae6e4350a082d3fafb8a7f8d9c329ebb876943"
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
