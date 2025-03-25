import React from "react";
import SlotCounter from "react-slot-counter";

export interface StatItem {
  number: string;
  label: string;
}

const StatsItem: React.FC<StatItem> = ({ number, label }) => {
  return (
    <div className="flex flex-col">
      <SlotCounter
        value={number}
        charClassName="text-red-600 font-bold text-3xl"
      />
      <span className="text-gray-600">{label}</span>
    </div>
  );
};

export default StatsItem;
