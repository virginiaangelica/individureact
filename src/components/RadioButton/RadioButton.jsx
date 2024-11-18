import React, { useState } from 'react';

export default function RadioButton({ options, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  const handleSelectionChange = (value) => {
    setSelected(value);
    onChange(value); 
  };

  return (
    <div className="flex gap-6">
      {options.map((option, index) => (
        <label
          key={option.value}
          className="flex items-center cursor-pointer gap-2 inline-flex"
        >
          <input
            type="radio"
            name="customRadio"
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleSelectionChange(option.value)}
            className="hidden"
          />
          <span
            className={`w-4 h-4 rounded-full flex items-center justify-center border ${
              selected === option.value
                ? 'bg-gray-600 border-black'
                : 'border-black'
            }`}
            style={{ width: '20px', height: '20px', borderWidth: '2px' }}
          >
            {selected === option.value && (
              <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            )}
          </span>
          <span
            className={`ml-2 ${
              selected === option.value ? 'text-white' : 'text-yellow-300 '
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
