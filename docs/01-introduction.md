# Introduction

TS+ is a language designed to be a strict superset of TypeScript that aims to leverage at the maximum the power of types.

One of the key design goals of TypeScript that enabled the language to reach mass adoption is the limitation of not generating value level code from types, this constraint enable separation of type checking and compilation and enabled compilers like babel, swc, esbuild to simply strip out the types from a file having the guarantee that the behaviour of the code isn't changed.

This design limitation while being incredibly helpful to the larger community is very limiting in what the language can do and what the language can become.

With this project we drop that restriction targeting the user who is all-in in TypeScript and wants to leverage the power of a richer set of features at the expenses of having to compile code first with the TS+ compiler (tools like babel, swc or esbuild can be used to process the compiled js file emitted by the compiler).

To preserve wider compatibility with the TypeScript ecosystem that we want to support our design limitations are the following:

- the code we emit shall be consumable from plain TypeScript (i.e. not extending type system)
- the code we consume must be fully valid typescript syntax (i.e. not extending language AST)
