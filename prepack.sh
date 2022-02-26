#!/bin/sh
COMMIT="2c243d53a40004f7e02aae7bc5d3a9ca4051a8a1"
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