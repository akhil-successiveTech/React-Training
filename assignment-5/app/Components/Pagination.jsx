"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function PostDataGrid() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  // Sets the page size and maximum number of rows to be fetched
  const pageSize = 10;
  const rowCount = 100;

  // Defines the column of data grid
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "body", headerName: "Body", flex: 2 },
  ];

  // Function to fetch data
  const fetchData = async (pageIndex) => {
    setLoading(true);
    try {
      const start = pageIndex * pageSize;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageSize}`
      );
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helps in re-render
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // This function will change the page after every time next button clicks
  const handleNext = () => {
    if ((page + 1) * pageSize >= rowCount) {
      setPage(0); 
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div style={{ height: 500, width: "100%", padding: 20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowCount={rowCount}
        pagination={false} // To handle the pagination manually using the next button
        loading={loading}
        hideFooterPagination
      />
      <button onClick={handleNext} style={{ marginTop: 10, border: "2px solid black", padding: "5px 5px"}}>
        Show Next 10
      </button>
    </div>
  );
}
