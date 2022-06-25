import { Button, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { NormalTable, PageCard, Result2dModal } from '../../Components'

 import classes from "./FourDResult.module.css"
const FourDResult = () => {
  const [open,setOpen] = useState(false);
  const openHandler = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const data = [];
  return (
    <PageCard>
        <div className={classes["btn-container"]}>
         <Button variant="contained" size="small" onClick={openHandler}>အသစ်ဖန်တီးရန်</Button>
        </div>
        <NormalTable columns={columns} data={data}>
            {
                Result3dData.map((data,index)=>(
                    <TableRow key={index}>
                        <TableCell>{data.no}</TableCell>
                        <TableCell>{data.threed}</TableCell>
                        <TableCell>{data.vote}</TableCell>
                        <TableCell>{data.status}</TableCell>
                        <TableCell>{data.date}</TableCell>
                        <TableCell>{data.amount}</TableCell>
                    </TableRow>
                ))
            }
        </NormalTable>
        <Result2dModal open={open} handleClose={handleClose} label="Four Digit Number" />
    </PageCard>
  )
}

export default FourDResult

const columns = ['စဥ်','စင်ကာပူထီ','Votes','Status','ရက်စွဲ','အပြင်အဆင်'];
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