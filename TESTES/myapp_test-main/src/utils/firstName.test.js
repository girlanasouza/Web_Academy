const { firstName } = require("./validations");

describe("firstName()", () => {
  it("should return the first name when the full name is given", () => {
    const fullName = "John Doc Etc";
    const result = firstName(fullName);
    expect(result).toBe("John");
  });
  it("should return the same name when no black space is found", () => {
    const name = "Alice";
    const result = firstName(name);
    expect(result).toBe(name);
  });
  it("should return the first name correctly where theres black space in the start", () => {
    const name = " Alice Test";
    const result = firstName(name);
    expect(result).toBe("Alice");
  });
  it("should return the first name correctly where theres black space in the end", () => {
    const name = "Alice Test ";
    const result = firstName(name);
    expect(result).toBe("Alice");
  });
});
