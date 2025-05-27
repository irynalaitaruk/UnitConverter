class UnitConverter {
  private conversionRates: Record<string, number>;

  constructor() {
    this.conversionRates = {
      m: 1,
      cm: 0.01,
      in: 0.0254,
      ft: 0.3048,
      mm: 0.001,
      yd: 0.9144,
      km: 1000,
    };
  }

  convert(input: { distance: { value: number; unit: string }; convert_to: string }) {
    const { distance, convert_to } = input;
    const { value, unit } = distance;

    if (!this.conversionRates[unit] || !this.conversionRates[convert_to]) {
      throw new Error(`Unsupported units: ${unit} or ${convert_to}`);
    }

    const valueInMeters = value * this.conversionRates[unit];
    const convertedValue = valueInMeters / this.conversionRates[convert_to];

    return {
      unit: convert_to,
      value: parseFloat(convertedValue.toFixed(2)),
    };
  }
}

export default UnitConverter;
