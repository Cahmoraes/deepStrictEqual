/**
 * Check if element is a primitive type
 * @date 04/10/2022 - 21:10:18
 *
 * @param {unknown} element Element to check
 * @returns {boolean}
 */
const isPrimitive = (element: unknown) => !(Object(element) === element)

/**
 * Return type of element
 * @date 04/10/2022 - 21:10:18
 *
 * @param {*} element Element to check type
 * @returns {String} Type of element
 */
const typeOfElement = (element: any) => {
  const typeString = Reflect.apply(Object.prototype.toString, element, [])
  return typeString
    .slice(typeString.indexOf(' ') + 1, typeString.indexOf(']'))
    .toUpperCase()
}

/**
 * Return own properties from element
 * @date 04/10/2022 - 21:10:18
 *
 * @param {*} element
 * @returns {Array} properties from element includes Symbols
 */
const getOwnKeys = (element: any) => Reflect.ownKeys(element)

/**
 * Check if both elements has different properties length
 * @date 04/10/2022 - 21:10:18
 *
 * @param {*} elementA
 * @param {*} elementB
 * @returns {boolean}
 */
const arePropertiesLengthDifferent = (elementA: any, elementB: any) =>
  getOwnKeys(elementA).length !== getOwnKeys(elementB).length

/**
 * Check if both elements are primitive types
 * @date 04/10/2022 - 21:10:18
 *
 * @param {*} elementA
 * @param {*} elementB
 * @returns {boolean}
 */
const areElementsPrimitives = (elementA: any, elementB: any) =>
  isPrimitive(elementA) && isPrimitive(elementB)

/**
 * Check if both elements are different types
 * @date 04/10/2022 - 21:10:18
 *
 * @param {*} elementA
 * @param {*} elementB
 * @returns {boolean}
 */
const areDifferentTypes = (elementA: any, elementB: any) =>
  typeOfElement(elementA) !== typeOfElement(elementB)

/**
 * Check if both elements are equals
 * @date 04/10/2022 - 21:10:18
 *
 * @param {*} elementA
 * @param {*} elementB
 * @returns {Boolean}
 */
const compareElements = (elementA: any, elementB: any) =>
  getOwnKeys(elementA).every((elementAKey) =>
    Reflect.has(elementB, elementAKey)
      ? deepStrictEqual(elementB[elementAKey], elementA[elementAKey])
      : false,
  )

/**
 * Convert a data structure to Object
 * @date 04/10/2022 - 21:10:18
 *
 * @param {*} element
 * @returns {*}
 */
const convertStructureToObject = (element: any) => {
  if (
    typeOfElement(element) === 'OBJECT' ||
    typeOfElement(element) === 'ARRAY'
  ) {
    return element
  }

  return structureStrategy(element)[typeOfElement(element)] ?? element
}

/**
 * Return convert object strategy
 * @date 05/10/2022 - 10:13:30
 *
 * @param {*} structure
 * @returns {{ MAP: any; SET: any; DEFAULT: any; }}
 */
const structureStrategy = (structure: any) => ({
  MAP: Array.from(structure),
  SET: Array.from(structure, (key) => [key, key]),
  DEFAULT: structure,
})

/**
 * Check if both data structures are equals
 * @date 04/10/2022 - 21:10:18
 *
 * @param {*} objA
 * @param {*} objB
 * @returns {boolean} true = equal, false = not equal
 */
const deepStrictEqual = (objA: any, objB: any): boolean => {
  if (areElementsPrimitives(objA, objB)) {
    return Object.is(objA, objB)
  }

  if (areDifferentTypes(objA, objB)) {
    return false
  }

  const tmp_elementA = convertStructureToObject(objA)
  const tmp_elementB = convertStructureToObject(objB)

  if (arePropertiesLengthDifferent(tmp_elementA, tmp_elementB)) {
    return false
  }

  return compareElements(tmp_elementA, tmp_elementB)
}

export default deepStrictEqual
