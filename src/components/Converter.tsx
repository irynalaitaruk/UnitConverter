import React, { useState } from "react";
import UnitConverter from "../utils/UnitConverter";

export const Converter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | "">("");
  const [inputUnit, setInputUnit] = useState<string>("m");
  const [outputUnit, setOutputUnit] = useState<string>("ft");
  const [result, setResult] = useState<string>("");

  const handleConvert = () => {
    const converter = new UnitConverter();
    const input = {
      distance: { value: Number(inputValue), unit: inputUnit },
      convert_to: outputUnit,
    };
    const conversionResult = converter.convert(input);
    setResult(`${conversionResult.value} ${conversionResult.unit}`);  
  };

  return (
    <div className="converter">
      <div className="converter-row">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="Enter value"
        />
        <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value)}>
          <option value="m">Meters</option>
          <option value="cm">Centimeters</option>
          <option value="in">Inches</option>
          <option value="ft">Feet</option>
          <option value="mm">Millimeters</option>
          <option value="yd">Yards</option>
          <option value="km">Kilometers</option>
        </select>
      </div>
      <div className="converter-row">
        <select value={outputUnit} onChange={(e) => setOutputUnit(e.target.value)}>
          <option value="m">Meters</option>
          <option value="cm">Centimeters</option>
          <option value="in">Inches</option>
          <option value="ft">Feet</option>
          <option value="mm">Millimeters</option>
          <option value="yd">Yards</option>
          <option value="km">Kilometers</option>
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      <p>{result}</p>
    </div>
  );
};
