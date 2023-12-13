import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateSelect = ({ onClose, onSelect }) => {
  const [dateValue, onDateChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSelectDate = () => {
    onSelect(dateValue);
    console.log("Selected Date:", dateValue);
    onClose();
  };

  return (
    <div className="p-8 text-blue-900">
      <h2 className="text-xl bg-orange-300">
        Choose a <i className="italic">date</i> that you want to look up
      </h2>

      <div className="mt-4 relative">
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          Select Date
        </button>

        {showCalendar && (
          <div
            className="absolute z-10 top-full bg-white shadow-md rounded-md"
          >
            <Calendar
              onChange={onDateChange}
              value={dateValue}
              autoFocus={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelect;
