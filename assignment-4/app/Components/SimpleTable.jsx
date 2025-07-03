"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import { useState } from "react";

// Sample data
const sampleData = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 21 },
  { id: 3, name: "Charlie", age: 30 },
  { id: 4, name: "David", age: 28 },
  { id: 5, name: "Eva", age: 23 },
  { id: 6, name: "Frank", age: 27 },
  { id: 7, name: "Grace", age: 22 },
];

export default function SimpleTable() {
  // UseState which column to sort
  const [column, setColumn] = useState("name");
  // UseState to define order of sorting
  const [order, setOrder] = useState("asc");
  // UseState of Current page number
  const [page, setPage] = useState(0);
  // Fixed rows
  const rowsPerPage = 4;

  // Change the order of a column(toggle order)
  const handleSort = (property) => {
    const isAsc = column === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setColumn(property);
  };

  // Creates a new copy of sorted data
  const sortedData = [...sampleData].sort((a, b) => {
    if (order === "asc") return a[column] > b[column] ? 1 : -1;
    else return a[column] < b[column] ? 1 : -1;
  });

  // Paginate the data
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    // MUI Components
    <Paper sx={{ width: "100%", overflow: "hidden", mt: 4 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={column === "name"}
                  direction={column === "name" ? order : "asc"}
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={column === "age"}
                  direction={column === "age" ? order : "asc"}
                  onClick={() => handleSort("age")}
                >
                  Age
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={sampleData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </Paper>
  );
}
