import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

export default function BasicTable() {
  const { state } = useLocation();
  const [result, setResult] = React.useState([]);

  useEffect(() => {
    console.log("useEffect");
    setResult(state.jsonBody.data);
  }, []);

  return (
    <>
      {result.length === 0 ? (
        <Typography textAlign={"center"}>No data found</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, maxWidth: 1500 }}
            aria-label="simple table"
            align={"center"}
          >
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">MRP</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={row.image} alt={row.name} width="40" />
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.mrp}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
