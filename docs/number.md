[@souljorje/utils](index.md) / number

# number

## Table of contents

* [Functions](#functions)
  * [getDecimalsCount()](#getdecimalscount)
  * [getPercentage()](#getpercentage)
  * [getPercentageChange()](#getpercentagechange)
  * [getRandomNumber()](#getrandomnumber)

## Functions

### getDecimalsCount()

```ts
function getDecimalsCount(num: number): number;
```

Defined in: [number.ts:26](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/number.ts#L26)

Returns count of decimal digits in number representation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `num` | `number` |

#### Returns

`number`

#### Example

```ts
getDecimalsCount(12.345) // 3
getDecimalsCount(10) // 0
```

***

### getPercentage()

```ts
function getPercentage(first: number, second: number): number;
```

Defined in: [number.ts:8](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/number.ts#L8)

Calculates first as a percentage of second.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `first` | `number` |
| `second` | `number` |

#### Returns

`number`

#### Example

```ts
getPercentage(25, 200) // 12.5
getPercentage(1, 4) // 25
```

***

### getPercentageChange()

```ts
function getPercentageChange(from: number, to: number): number;
```

Defined in: [number.ts:17](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/number.ts#L17)

Calculates percentage change between two numbers

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | `number` |
| `to` | `number` |

#### Returns

`number`

#### Example

```ts
getPercentageChange(200, 25) // 700
getPercentageChange(25, 200) // −87.5
```

***

### getRandomNumber()

```ts
function getRandomNumber(min: number, max: number): number;
```

Defined in: [number.ts:35](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/number.ts#L35)

Generates a random integer in the inclusive range \[min, max].

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Example

```ts
getRandomNumber(1, 3) // 1 | 2 | 3
getRandomNumber(5, 5) // 5
```
