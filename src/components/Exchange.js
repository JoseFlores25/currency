import React from "react";

export const Exchange = (props) => {
  const { currencyOptions } = props;
  return (
    <div>
      <input type="number" className="input" />
      <select>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
