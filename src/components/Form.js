import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    image: '',
    heading: '',
    description: '',
    dateName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="image">
          Image
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="file" 
          id="image" 
          name="image"
          onChange={handleChange} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="heading">
          Heading
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="text" 
          id="heading" 
          name="heading"
          onChange={handleChange} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="description">
          Description
        </label>
        <textarea 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          id="description" 
          name="description"
          onChange={handleChange} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="dateName">
          Date Name
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="text" 
          id="dateName" 
          name="dateName"
          onChange={handleChange} 
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default Form;
