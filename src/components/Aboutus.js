import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';

const DateSelect = ({ onClose, onSelect }) => {
  const [dateValue, onDateChange] = useState(new Date());

  const handleSelectDate = () => {
    onSelect(dateValue);
    onClose();
  };

  return (
    <div className="p-8 text-blue-900">
      <h2 className="text-xl bg-orange-300">
        Choose a <i className="italic">date</i> that you want to look up
      </h2>

      <div className="mt-4">
        <DatePicker
          onChange={onDateChange}
          value={dateValue}
          autoFocus={true}
          className="border p-2 rounded-md"
          closeCalendar={false}
        />
      </div>

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleSelectDate}
      >
        Select Date
      </button>
      
    </div>
  );
};

const Aboutus = () => {
  const [selectedOption, setSelectedOption] = useState('ram');
  const [showDateSelect, setShowDateSelect] = useState(false);

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    // Show the DateSelect component when specific options are chosen
    if (['activity', 'access', 'datatrans'].includes(selectedValue)) {
      setShowDateSelect(true);
    } else {
      setShowDateSelect(false);
    }
  };

  const handleDateSelect = (selectedDate) => {
    // Do something with the selected date, e.g., pass it to the parent component
    console.log('Selected date:', selectedDate);
  };

  const handleCloseDateSelect = () => {
    setShowDateSelect(false);
  };

  return (
    <div>
      <h2 className="text-xl">About Us Page</h2>
      <p>This is the About Us page, which is also a work in progress.</p>

      <div className="py-8">
        <label htmlFor="options">Select an option:</label>
        <select id="options" value={selectedOption} onChange={handleOptionChange}>
          <option value="ram">RAM Capture</option>
          <option value="activity">User Activity</option>
          <option value="process">Process Running</option>
          <option value="access">Access</option>
          <option value="input">Input devices</option>
          <option value="datatrans">Data Transfer</option>
        </select>
      </div>

      <p>You selected: {selectedOption}</p>

      {showDateSelect && (
        <DateSelect onClose={handleCloseDateSelect} onSelect={handleDateSelect} />
      )}
    </div>
  );
};

export default Aboutus;