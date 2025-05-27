import { describe, it, expect } from "vitest";
import UnitConverter from "./UnitConverter";

describe("DistanceConverter", () => {
  const converter = new UnitConverter();

  it("should convert meters to feet correctly", () => {
    const input = { distance: { value: 1, unit: "m" }, convert_to: "ft" };
    const result = converter.convert(input);
    expect(result).toEqual({ value: 3.28, unit: "ft" });
  });

  it("should convert feet to centimeters correctly", () => {
    const input = { distance: { value: 5, unit: "ft" }, convert_to: "cm" };
    const result = converter.convert(input);
    expect(result).toEqual({ value: 152.4, unit: "cm" });
  });

  it("should throw an error for unsupported input unit", () => {
    const input = { distance: { value: 5, unit: "unsupported" }, convert_to: "cm" };
    expect(() => converter.convert(input)).toThrow("Unsupported units: unsupported or cm");
  });

  it("should throw an error for unsupported output unit", () => {
    const input = { distance: { value: 5, unit: "m" }, convert_to: "unsupported" };
    expect(() => converter.convert(input)).toThrow("Unsupported units: m or unsupported");
  });

  it("should convert kilometers to meters correctly", () => {
    const input = { distance: { value: 1, unit: "km" }, convert_to: "m" };
    const result = converter.convert(input);
    expect(result).toEqual({ value: 1000, unit: "m" });
  });

  it("should handle zero values correctly", () => {
    const input = { distance: { value: 0, unit: "m" }, convert_to: "ft" };
    const result = converter.convert(input);
    expect(result).toEqual({ value: 0, unit: "ft" });
  });
});
