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

  it('should compare two instances with same values and return toBeTruthy', () => {
    class Person {
      name
      constructor(name: string) {
        this.name = name
      }
    }

    const person_1 = new Person('caique')
    const person_2 = new Person('caique')

    expect(deepStrictEqual(person_1, person_2)).toBeTruthy()
  })

  it('should return falsy when compare two data types different', () => {
    const set = new Set().add(1)
    const map = new Map().set('name', 'thomas')

    expect(deepStrictEqual(set, map)).toBeFalsy()
  })

  it('should compare two instances with different values and return falsy', () => {
    class Person {
      name
      constructor(name: string) {
        this.name = name
      }
    }

    const person_1 = new Person('caique')
    const person_2 = new Person('thomas')

    expect(deepStrictEqual(person_1, person_2)).toBeFalsy()
  })

  it('should compare two arrays and return truthy when they have same index values', () => {
    const arr_1 = [1, 2, 3, 4, '5', { name: 'caique' }]
    const arr_2 = [1, 2, 3, 4, '5', { name: 'caique' }]

    expect(deepStrictEqual(arr_1, arr_2)).toBeTruthy()
  })

  it('should compare two arrays and return falsy when they not have same index values', () => {
    const arr_1 = [1, 2, 3, 4, 5, { name: 'caique' }]
    const arr_2 = [1, 2, 3, 4, '5', { name: 'caique' }]

    expect(deepStrictEqual(arr_1, arr_2)).toBeFalsy()
  })

  it('should compare two Sets and return falsy when they not have same index values', () => {
    const set_1 = new Set().add(1)
    const set_2 = new Set().add(2)

    expect(deepStrictEqual(set_1, set_2)).toBeFalsy()
  })

  it('should compare two Sets and return truthy when they have same index values', () => {
    const set_1 = new Set().add(1)
    const set_2 = new Set().add(1)

    expect(deepStrictEqual(set_1, set_2)).toBeTruthy()
  })

  it('should compare two Maps and return truthy when they have same entries values', () => {
    const map_1 = new Map().set('name', 'caique')
    const map_2 = new Map().set('name', 'caique')

    expect(deepStrictEqual(map_1, map_2)).toBeTruthy()
  })

  it('should compare two Maps and return falsy when they not have same entries values', () => {
    const map_1 = new Map().set('name', 'caique')
    const map_2 = new Map().set('name', 'thomas')

    expect(deepStrictEqual(map_1, map_2)).toBeFalsy()
  })
})
