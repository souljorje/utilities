[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / getPropByPath

# Function: getPropByPath()

> **getPropByPath**\<`T`\>(`object`, `path`, `defaultValue?`): `T` \| `undefined`

Defined in: object/index.ts:113

Gets nested property value by dotted or array path.

## Type Parameters

### T

`T` = `unknown`

## Parameters

### object

`any`

### path

`string` | (`string` \| `number`)[]

### defaultValue?

`T`

## Returns

`T` \| `undefined`

## Example

```ts
getPropByPath({ a: { b: 1 } }, 'a.b') // 1
getPropByPath({ a: {} }, 'a.b', 0) // 0
```
