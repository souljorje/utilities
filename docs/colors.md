[@souljorje/utils](index.md) / colors

# colors

## Table of contents

* [Functions](#functions)
  * [hex2rgba()](#hex2rgba)

## Functions

### hex2rgba()

```ts
function hex2rgba(hex, alpha): string;
```

Defined in: [colors.ts:7](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/colors.ts#L7)

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
