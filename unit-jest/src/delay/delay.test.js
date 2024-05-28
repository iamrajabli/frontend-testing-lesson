const { delay } = require("./delay.js");

describe("delay tests", () => {

  test("correct values", async () => {
    const sum = await delay(() => 5 + 5, 1000)

    expect(sum).toBe(10)
  })
})



