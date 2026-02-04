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
function getDecimalsCount(num): number;
```

Defined in: [number.ts:26](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/number.ts#L26)

Returns count of decimal digits in number representation.

#### Parameters

##### num

`number`

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
function getPercentage(first, second): number;
```

Defined in: [number.ts:8](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/number.ts#L8)

Calculates first as a percentage of second.

#### Parameters

##### first

`number`

##### second

`number`

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
function getPercentageChange(from, to): number;
```

Defined in: [number.ts:17](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/number.ts#L17)

Calculates percentage change between two numbers

#### Parameters

##### from

`number`

##### to

`number`

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
function getRandomNumber(min, max): number;
```

Defined in: [number.ts:35](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/number.ts#L35)

Generates a random integer in the inclusive range \[min, max].

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`number`

#### Example

```ts
getRandomNumber(1, 3) // 1 | 2 | 3
getRandomNumber(5, 5) // 5
```
