import React, { useState } from 'react';

const Aboutus = () => {
  const [selectedOption, setSelectedOption] = useState('ram');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h2 className='text-xl'>About Us Page</h2>
      <p>This is the About Us page, which is also a work in progress.</p>

      <div className='py-8'>
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
    </div>
  );
};

export default Aboutus;