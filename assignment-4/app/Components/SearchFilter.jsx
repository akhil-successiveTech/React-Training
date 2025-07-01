"use client"
import { useState } from "react";

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Fruits</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {filteredItems.length === 0 && <li>No items found.</li>}
      </ul>
    </div>
  );
}
