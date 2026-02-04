[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [string](../index.md) / snakeCaseToCamelCase

# Function: snakeCaseToCamelCase()

> **snakeCaseToCamelCase**(`s`): `string`

Defined in: [string.ts:86](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/string.ts#L86)

Converts snake_case text to camelCase.

## Parameters

### s

`string`

## Returns

`string`

## Example

```ts
snakeCaseToCamelCase('my_token_id') // 'myTokenId'
snakeCaseToCamelCase('alreadyCamel') // 'alreadyCamel'
```
