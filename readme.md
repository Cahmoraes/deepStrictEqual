# Motivation

This package perform deep strict equal between data structures.

## Usage

```js
import { deepStrictEqual } from '@cahmoraes93/deep-strict-equal'

deepStrictEqual({ foo: { bar: [1, 2] } }, { foo: { bar: [1, 2] } })
//=> true

deepStrictEqual({ foo: { bar: [1, 2] } }, { foo: { bar: [1, 4] } })
//=> false

deepStrictEqual({ foo: { bar: 1 } }, { foo: { bar: 1 } })
//=> true

deepStrictEqual({ foo: { bar: 1 } }, { foo: { bar: '1' } })
//=> false
```
