const { calculateTotalPrice } = require("./validations");

describe("calculateTotalPrice()", () => {
  it("should calculate the total price of an array of products correctly", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: 15, quantity: 2 },
      { name: "Product 3", price: 20, quantity: 1 },
    ];
    expect(calculateTotalPrice(products).toBe(70));
  });

  it("should return 0 if len products is zero (array is empty)", () => {
    const product = [];
    expect(calculateTotalPrice(products)).toBe(0);
  });
});
