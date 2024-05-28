const { verifyStockAvailability } = require("./validations");

describe("verifyStockAvailability()", () => {
  // teste laptop
  it("should return true when the desire quantity of laptop is available in stock", () => {
    expect(verifyStockAvailability("laptop", 5)).toBe(true);
  });
  it("should return false when the desire quantity of laptop exceeds available stock", () => {
    expect(verifyStockAvailability("laptop", 11)).toBe(false);
  });

  // teste smartphone
  it("should return true when the desire quantity of smartphone is available in stock", () => {
    expect(verifyStockAvailability("smartphone", 20)).toBe(true);
  });
  it("should return false when the desire quantity of smartphone exceeds available stock", () => {
    expect(verifyStockAvailability("laptop", 21)).toBe(false);
  });
  // teste headphone
  it("should return true when the desire quantity of headphone is available in stock", () => {
    expect(verifyStockAvailability("laptop", 5)).toBe(true);
  });
  it("should return false when the desire quantity of headphone exceeds available stock", () => {
    expect(verifyStockAvailability("laptop", 11)).toBe(false);
  });

  // teste book
  it("should return false when the desire quantity of book is zero", () => {
    expect(verifyStockAvailability("book", 1)).toBe(false);
  });

  // test type of the products
  it("should return false when the type of product for unknown", () => {
    expect(verifyStockAvailability("", 1)).toBe(false);
  });
});
