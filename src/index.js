const conversionRates = {
  m: 1,
  cm: 0.01,
  in: 0.0254,
  ft: 0.3048,
  mm: 0.001,
  yd: 0.9144,
  km: 1000
};

function convertDistance(input) {
  const { distance, convert_to } = input;
  const { value, unit } = distance;

  if (!conversionRates[unit] || !conversionRates[convert_to]) {
    throw new Error(`Unsupported units: ${unit} or ${convert_to}`);
  }

  const valueInMeters = value * conversionRates[unit];
  const convertedValue = valueInMeters / conversionRates[convert_to];

  return {
    unit: convert_to,
    value: parseFloat(convertedValue.toFixed(2))
  };
}

const input = {
  distance: { unit: "m", value: 0.5 },
  convert_to: "ft"
};

// const input = {
//   distance: { "unit": "ft", "value": 5 },
//   convert_to: "cm"
// }

  const result = convertDistance(input);
  console.log(result);
