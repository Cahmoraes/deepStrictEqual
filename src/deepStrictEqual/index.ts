const isPrimitive = (element: unknown) => !(Object(element) === element)

const deepStrictEqual = (objA: any, objB: any): boolean => {
  if (isPrimitive(objA) && isPrimitive(objB)) return Object.is(objA, objB)
  if (Reflect.ownKeys(objA).length !== Reflect.ownKeys(objB).length)
    return false
  return Reflect.ownKeys(objA).every((objAKey) =>
    Reflect.has(objB, objAKey)
      ? deepStrictEqual(objB[objAKey], objA[objAKey])
      : false,
  )
}

export default deepStrictEqual
