# Types

TS+ works by procedding additional JSDoc annotations that you write on types and on exported values.

In order to define a type that TS+ can process the following code shall be used:

```ts
/**
 * @tsplus type Int
 */
interface Int {
    readonly number: number
}
```

where the format of the annotation is `@tsplus type TYPE_NAME`, in order to avoid conflicts with similarly named types that may come from libraries it is advised to prefix the type name with an identifier like:

```ts
/**
 * @tsplus type myProject/Int
 */
interface Int {
    readonly number: number
}
```

once you have a type indexed in TS+ you can attach extensions to it.

# Companion Pattern

What we would like to achieve with an `Int` module like the one defined above is to have a user experience like the following:

```ts
const three = Int(1) + Int(2) + Int.parse("3")
const string = three.stringify()
```

In order to achieve this we need a few things, it isn't enough to extend the `Int` type we also need a value `Int` named in the same way as the type where we can add static members (think of it like a class with static methods)

A common pattern that can be used to achieve that is the following:

```ts
/**
 * @tsplus type stdlib/Int
 */
export interface Int {
    readonly number: number
}
/**
 * @tsplus type stdlib/IntOps
 */
export interface IntOps {}
export const Int: IntOps = {}
```

In this way we have a type called `Int` and a value also called `Int` (of type `IntOps`)

# Static Extensions

Given a type like the one defined before we will now add two static methods on the companion object (`IntOps`)

```ts
/**
 * @tsplus static stdlib/IntOps parse
 */
export function parse(str: string): Int {
    if (str.match(/^\d+$/)) {
        return { number: Number.parseInt(str) }
    }
    throw new Error(`Cannot parse an Int from: ${str}`)
}
```

With the above defined we can now do:

```ts
const one = Int.parse("1")
```

The format of the annotation is the following: `@tsplus static TYPE_NAME PROPERTY_NAME`
