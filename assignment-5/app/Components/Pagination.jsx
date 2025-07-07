"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function PostDataGrid() {
  // State to hold the table data (posts)
  const [rows, setRows] = useState([]);
  // State to manage loading state while fetching data
  const [loading, setLoading] = useState(true);
  // Current page index (starts from 0)
  const [page, setPage] = useState(0);
  // Total number of rows in the dataset (can be dynamic if your API supports it)
  const [rowCount, setRowCount] = useState(100);
  // Number of rows to display per page
  const pageSize = 10;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "body", headerName: "Body", flex: 2 },
  ];

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true); // Show loading spinner
      try {
        const start = page * pageSize;
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageSize}`
        );
        const data = await res.json();
        setRows(data); // Set fetched posts as rows
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [page]);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}                   
        columns={columns}               
        pageSize={pageSize}            
        paginationMode="server"        
        rowCount={rowCount}            
        onPageChange={(newPage) => setPage(newPage)} 
        page={page}                   
        loading={loading}             
      />
    </div>
  );
}
