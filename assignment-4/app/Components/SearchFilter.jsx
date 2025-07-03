"use client"
import { useState } from "react";

const SearchFilter = () => {
  // Input useState
  const [query, setQuery] = useState("");

  // List of item in which we are searching
  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

  // Function to filter the input
  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Fruits</h2>

      {/* Input from user */}
      <input
        type="text"
        value={query}
        style={{border: "2px solid black"}}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />

      <ul>

        {/* Displaying the values  */}
        {filterItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

        {/* This is conditional rendering */}
        {filterItems.length === 0 && <li>No items found.</li>}
      </ul>
    </div>
  );
}

export default SearchFilter;