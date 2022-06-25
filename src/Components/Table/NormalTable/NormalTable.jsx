import * as React from 'react';
import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from "./NormalTable.module.css"
import { TableBody } from '@mui/material';
import Nodata from '../../Nodata/Nodata';

export default function NormalTable({columns,children,data}) {
  return (
    <div className={classes["table-margin"]}>
      {
        data.length ? ( <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {
                  columns.map((col,index)=>(
                    <TableCell align="center" key={index}
                    className={classes["table-header"]}
                    style={{color:"white"}}
                    >{col}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
                {children}
            </TableBody>
          </Table>
        </TableContainer>):(<Nodata />)
      }
   
    </div>
  );
}
