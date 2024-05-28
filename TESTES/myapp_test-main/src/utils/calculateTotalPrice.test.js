const { calculateTotalPrice } = require("./validations");

describe("calculateTotalPrice()", () => {
  // teste com tudo coretamente
  it("should calculate the total price of an array of products correctly", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: 15, quantity: 2 },
      { name: "Product 3", price: 20, quantity: 1 },
    ];
    expect(calculateTotalPrice(products)).toBe(70);
  });

  // teste com array vazio
  it("should return 0 if len products is zero (array is empty)", () => {
    const products = [];
    expect(calculateTotalPrice(products)).toBe(0);
  });
  // teste como apenas um produto
  it("should calculate the total price correctly for a single product", () => {
    const product = [{ name: "product1", price: 100, quantity: 1 }];
    expect(calculateTotalPrice(product)).toBe(100);
  });

  it("should calculate the total price correctly for products with quantity zero", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 0 },
      { name: "Product 2", price: 15, quantity: 0 },
      { name: "Product 3", price: 20, quantity: 0 },
    ];
    expect(calculateTotalPrice(products)).toBe(0);
  });
  // teste com quantidades mistas, envolvendo o zero
  it("should calculate the total price correctly with mixed quantities", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 1 },
      { name: "Product 2", price: 15, quantity: 0 },
      { name: "Product 3", price: 20, quantity: 3 },
    ];
    expect(calculateTotalPrice(products)).toBe(70);
  });
  // teste com precos iguais zerados
  it("should calculate the total price correctly for products with price zero", () => {
    const products = [
      { name: "Product 1", price: 0, quantity: 1 },
      { name: "Product 2", price: 0, quantity: 0 },
      { name: "Product 3", price: 0, quantity: 3 },
    ];
    expect(calculateTotalPrice(products)).toBe(0);
  });
  // teste com quantidades mistas, incluindo o zero
  it("should calculate the total price correctly with mixed prices", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 1 },
      { name: "Product 2", price: 0, quantity: 0 },
      { name: "Product 3", price: 10, quantity: 3 },
    ];
    expect(calculateTotalPrice(products)).toBe(40);
  });
});
