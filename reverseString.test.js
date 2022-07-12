const reverse = require ('./reverseString')

test("Reverse a string" , () => {
  expect(reverse("Cool")).toBeDefined()
})

test("Reverse a string" , () => {
  expect(reverse("Cool")).toBe("looc")
})