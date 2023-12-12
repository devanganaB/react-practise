import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted name:', name);
  };

  return (
    <div>
      <h2 className="text-xl">Search Name</h2>
      <p>Enter the name in the input field:</p>

      <form onSubmit={handleSubmit}>
        <div className="py-8">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Name;