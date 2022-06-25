import { TableCell, TableRow } from '@mui/material';
import React from 'react'
import Switchbutton from '../../Switchbutton/Switchbutton';

import NormalTable from '../../Table/NormalTable/NormalTable'
import classes from "./LotteryOpening.module.css"
const LotteryOpening = () => {
  const columns = ["#","2D","3D","Current Date"];
  const row = [
    {date:"Tuseday,May 17,2022",time:"09:42:40 PM"},
    {date:"Tuseday,May 17,2022",time:"09:42:40 PM"},
    {date:"Tuseday,May 17,2022",time:"09:42:40 PM"},
]
const data = [];
  return (
    <div>
        <NormalTable columns={columns} data={data}>
        {
            row.map((row,index)=>(
                <TableRow key={index}>
                    <TableCell align="center">
                     <Switchbutton />
                    </TableCell>
                    <TableCell align="center">
                     <Switchbutton />
                    </TableCell>
                    <TableCell align="center">
                    {
                        row.date
                    }
                    </TableCell>
                    <TableCell align="center">
                    {
                        row.time
                    }
                    </TableCell>
                </TableRow>
            ))
        }
        </NormalTable>
    </div>
  )
}

export default LotteryOpening