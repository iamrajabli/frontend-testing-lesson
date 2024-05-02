const { mapToString } = require('./mapToString.js');

describe("array values to string", () => {
  test("correct value", () => {
    expect(mapToString([1, 2, 3])).toStrictEqual(['1', '2', '3'])
  })

  test("mixture", () => {
    expect(mapToString([1, 2, 3, undefined, null, new Object()])).toStrictEqual(['1', '2', '3'])
  })

  test("empty array", () => {
    expect(mapToString([])).toStrictEqual([])

  })

  test("negative", () => {
    expect(mapToString([1, 2, 3, 4])).not.toStrictEqual(['1', '2', '3'])
  })

})
