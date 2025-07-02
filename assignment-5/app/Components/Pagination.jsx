"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function PostDataGrid() {
  // To manage the 
  const [rows, setRows] = useState([]);
  // To manage the loading spinner
  const [loading, setLoading] = useState(true);

  // Tells the DataGrid how to render the columns
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "body", headerName: "Body", flex: 2 },
  ];

  // Fetch data from URL
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setRows(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div style={{ height: 500, width: "100%" }}>
      {/* MUI component */}
      <DataGrid rows={rows} columns={columns} loading={loading} pageSize={10} />
    </div>
  );
}
