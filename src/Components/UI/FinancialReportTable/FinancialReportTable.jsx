import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from "./FinancialReportTable.module.css"



const columns = ['Pay Account',"No","TopUp","No","Withdraw","Profit & Loss"];
const rows = [
  {acc:"Kpay",no:"30",topUp:"40",Withdraw:"4904390",profit:"-338992"},
  {acc:"Kpay",no:"30",topUp:"40",Withdraw:"4904390",profit:"-338992"},
  {acc:"Kpay",no:"30",topUp:"40",Withdraw:"4904390",profit:"-338992"},
  {acc:"Kpay",no:"30",topUp:"40",Withdraw:"4904390",profit:"-338992"},
];

const totalData = ["Total","0","0","0","0","0"]

export default function FinancialReportTable() {
  return (
    <div className={classes["table-margin"]}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              columns.map((col,index)=>(
                <TableCell align="center" key={index}>{col}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
            >
              <TableCell component="th" scope="row">
                {row.acc}
              </TableCell>
              <TableCell align="center">{row.no}</TableCell>
              <TableCell align="center">{row.topUp}</TableCell>
              <TableCell align="center">{row.no}</TableCell>
              <TableCell align="center">{row.Withdraw}</TableCell>
              <TableCell align="center">{row.profit}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            {
              totalData.map((total,index)=>(
                <TableCell align="center" style={{backgroundColor:"var(--main-color)",color:"white"}} key={index}>{total}</TableCell>
              ))
            }
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
