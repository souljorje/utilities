[@souljorje/utils](index.md) / colors

# colors

## Table of contents

* [Functions](#functions)
  * [hex2rgba()](#hex2rgba)

## Functions

### hex2rgba()

```ts
function hex2rgba(hex: string, alpha: number): string;
```

Defined in: [colors.ts:7](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/colors.ts#L7)

Converts hex color code to rgba string.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `hex` | `string` | `undefined` |
| `alpha` | `number` | `1` |

#### Returns

`string`

#### Example

```ts
hex2rgba('#ff0000', 0.5) // 'rgba(255,0,0,0.5)'
```
