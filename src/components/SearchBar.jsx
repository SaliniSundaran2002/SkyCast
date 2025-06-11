import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");
    return (
      <div className="flex justify-center my-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-2 rounded-l bg-white shadow"
        />
        <button
          onClick={() => onSearch(city)}
          className="p-2 bg-blue-500 text-white rounded-r"
        >
          Search
        </button>
      </div>
  )
}

export default SearchBar