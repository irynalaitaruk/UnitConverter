import React from "react";
import { Converter } from "./components/Converter";

export const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Unit Converter</h1>
      <Converter />
    </div>
  );
};
