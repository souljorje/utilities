[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [browser](../index.md) / confirmExternalLinks

# Function: confirmExternalLinks()

> **confirmExternalLinks**(`confirmationFn`): `void`

Defined in: [browser.ts:71](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/browser.ts#L71)

Guards external links with a confirmation callback.
Ignores local links and whitelisted domains.

## Parameters

### confirmationFn

(`link`) => `boolean` \| `Promise`\<`boolean`\>

## Returns

`void`
