import { Button, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { NormalTable, PageCard, Result2dModal } from '../../Components'
import classes from "./ThreeDResult.module.css"
const ThreeDResult = () => {
  const [open,setOpen] = useState(false);
  const openHandler = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const data = [];
  return (
 <PageCard>
    <div className={classes["btn-container"]}>
        <Button size="small" variant="contained" onClick={openHandler}>အသစ်ဖန်တီးရန်</Button>
    </div>

    <NormalTable columns={columns} data={data}>
    {
        Result3dData.map((data,index)=>(
            <TableRow key={index}>
                <TableCell align='center'>{data.no}</TableCell>
                <TableCell align='center'>{data.name}</TableCell>
                <TableCell align='center'>{data.threed}</TableCell>
                {/* <TableCell align='center'>{data.vote}</TableCell> */}
                <TableCell align='center'>{data.status}</TableCell>
                <TableCell align='center'>{data.date}</TableCell>
                <TableCell align='center'>{data.amount}</TableCell>
            </TableRow>
        ))
    }
    </NormalTable>
    <Result2dModal open={open} handleClose={handleClose} label="Three Digit Number" />
 </PageCard>
  )
}

export default ThreeDResult
const columns = ['စဥ်','သုံးလုံးထီ','Votes','Status','ရက်စွဲ','အပြင်အဆင်'];
export const Result3dData = [
    {
      no: 1,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 2,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 3,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 4,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 5,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 6,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 7,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 8,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 9,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 10,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 11,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 12,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 13,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 14,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 15,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 16,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 17,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 18,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 19,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 20,
      name: "Kyaw Thiha Soe",
      threed: 523,
      vote: "011,013,021,102,120",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
  ];