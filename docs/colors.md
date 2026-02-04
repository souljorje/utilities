[@souljorje/utils](index.md) / colors

# colors

## Table of contents

* [Functions](#functions)
  * [hex2rgba()](#hex2rgba)

## Functions

### hex2rgba()

> **hex2rgba**(`hex`, `alpha`): `string`

Defined in: [colors.ts:7](https://github.com/souljorje/utilities/blob/3f91830d17da9fbdba6ce578971e8051de26d2e3/src/colors.ts#L7)

Converts hex color code to rgba string.

#### Parameters

##### hex

`string`

##### alpha

`number` = `1`

#### Returns

`string`

#### Example

```ts
hex2rgba('#ff0000', 0.5) // 'rgba(255,0,0,0.5)'
```
