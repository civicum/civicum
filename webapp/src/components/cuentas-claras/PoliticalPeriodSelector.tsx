import React from 'react';

interface PoliticalPeriodSelectorProps {
  onChange: (periodo: string) => void;
}

export default function PoliticalPeriodSelector({ onChange }: PoliticalPeriodSelectorProps) {
  const periods = ['2022-2025', '2018-2021', '2014-2017', '2010-2013', '2006-2009'];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative w-48">
      <select
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-terracota-600"
      >
        {periods.map(period => (
          <option key={period} value={period}>
            {period}
          </option>
        ))}
      </select>
    </div>
  );
}