import { describe, it, expect } from '@jest/globals'
import { deepStrictEqual } from '../src'

describe('deepStrictEqual Test Suite', () => {
  it('should return true when objects are deep strict equals', () => {
    const obj_1 = {
      name: 'caique',
      age: 29,
      [Symbol.iterator]() {},
      hobbies: [
        'books',
        'sports',
        {
          action: 123,
          hooks: [[[23, [23], {}]]],
        },
      ],
      hello() {
        return 'hello'
      },
    }

    const obj_2 = {
      name: 'caique',
      age: 29,
      [Symbol.iterator]() {},
      hobbies: [
        'books',
        'sports',
        {
          action: 123,
          hooks: [[[23, [23], {}]]],
        },
      ],
      hello() {
        return 'hello'
      },
    }

    expect(deepStrictEqual(obj_1, obj_2)).toBeTruthy()

    const o_1 = {
      name: 'caique',
      age: 29,
      // [Symbol.iterator]() {},
      hobbies: [
        'books',
        'sports',
        {
          action: 123,
          hooks: [[[23, [23], {}]]],
        },
      ],
    }

    const o_2 = {
      name: 'caique',
      age: 29,
      // [Symbol.iterator]() {},
      hobbies: [
        'books',
        'sports',
        {
          action: 123,
          hooks: [[[23, [23], {}]]],
        },
      ],
    }

    expect(o_1).toStrictEqual(o_2)
  })
  it('should return true when symbols are equals', () => {
    const kInfo = Symbol('key')
    const obj_1 = {
      [kInfo]: 'test',
    }

    const obj_2 = {
      [kInfo]: 'test',
    }

    expect(deepStrictEqual(obj_1, obj_2)).toBeTruthy()
  })

  it('should return falsy when properties length are different', () => {
    const obj_1 = {
      name: 'caique',
      age: 29,
      address: {
        street: 'Baker',
      },
    }

    const obj_2 = {
      name: 'caique',
      age: 29,
      address: {
        street: 'Baker',
        number: '221b',
      },
    }

    expect(deepStrictEqual(obj_1, obj_2)).toBeFalsy()
  })

  it('should return falsy when nested properties length are different', () => {
    const obj_1 = {
      name: 'caique',
      age: 29,
      address: {
        street: 'Baker',
        something: 'something',
      },
    }

    const obj_2 = {
      name: 'caique',
      age: 29,
      address: {
        street: 'Baker',
        number: '221b',
      },
    }

    expect(deepStrictEqual(obj_1, obj_2)).toBeFalsy()
  })
})
