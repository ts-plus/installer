#!/bin/sh
COMMIT="8446e165f42a2f5b7555e0bc8bb8d7ecc40064f2"
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
