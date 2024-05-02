const { square } = require("./square.js");

describe("validation tests", () => {

  test("correct values", () => {
    const spyMathPow = jest.spyOn(Math, 'pow');

    square(2)

    expect(spyMathPow).toBeCalledTimes(1)
  })

  test("incorrect values", () => {
    const spyMathPow = jest.spyOn(Math, 'pow');

    square(1)

    expect(spyMathPow).not.toBeCalledTimes(1)
  })


  afterEach(() => {
    jest.clearAllMocks()
  })
})


