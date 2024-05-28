const { validateValue } = require("./validateValue.js");

describe("validation tests", () => {

  test("correct value", () => {
    expect(validateValue(1)).toBe(true)
  })

  test("between correct values", () => {
    expect(validateValue(50)).toBe(true)
  })

  test("more limit value", () => {
    expect(validateValue(99)).toBe(true)
  })

  test("less than correct", () => {
    expect(validateValue(-1)).toBe(false)
  })

  test("more than correct", () => {
    expect(validateValue(101)).toBe(false)
  })

  test("lower limit value", () => {
    expect(validateValue(0)).toBe(true)
  })

})

