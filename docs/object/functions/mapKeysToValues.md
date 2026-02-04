[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / mapKeysToValues

# Function: mapKeysToValues()

> **mapKeysToValues**\<`K`, `V`, `R`\>(`keys`, `values`, `getValue`): `Record`\<`K`, `R`\>[]

Defined in: object/index.ts:47

Maps tabular rows to objects using provided keys.

## Type Parameters

### K

`K` *extends* `string`

### V

`V`

### R

`R` = `V`

## Parameters

### keys

`K`[]

### values

`V`[][]

### getValue

(`key`, `value`) => `R`

## Returns

`Record`\<`K`, `R`\>[]

## Example

```ts
mapKeysToValues(['a', 'b'], [[1, 2]]) // [{ a: 1, b: 2 }]
mapKeysToValues(['a'], [[1], [2]]) // [{ a: 1 }, { a: 2 }]
```
