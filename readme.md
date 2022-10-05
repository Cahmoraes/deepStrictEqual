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

## Map

const map_1 = new Map().set('name', 'caique')
const map_2 = new Map().set('name', 'caique')

deepStrictEqual(map_1, map_2)
//=> true

const map_1 = new Map().set('name', 'caique')
const map_2 = new Map().set('name', 'thomas')

deepStrictEqual(map_1, map_2)
//=> false

## Set
const set_1 = new Set().add(1)
const set_2 = new Set().add(1, 2)

deepStrictEqual(set_1, set_2)
//=> false
```
