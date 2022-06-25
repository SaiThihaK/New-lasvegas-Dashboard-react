import {  TableCell, TableRow } from '@mui/material'
import React from 'react'
import { CustomLoading, NormalTable, PageCard } from '../../../Components'
import { CustomGetFunction } from '../../../services'

const UnitHistory = () => {
  const {data,loading} = CustomGetFunction(`api/wallet/transfer-record?sortColumn=id&sortDirection=desc&limit=10`,[]);
  console.log("data",data);
  return (
    <PageCard>
      {
        loading ? (<NormalTable columns={columns} data={data}>
          {
        data.map((data,index)=>(
          <TableRow key={index}>
              <TableCell align="center">{data?.id}</TableCell>
              <TableCell align="center">{data?.readable_date}</TableCell>
              <TableCell align="center">{data?.transfer_amount}</TableCell>
              <TableCell align="center">{data?.sender_user?.name}</TableCell>
              <TableCell align="center">{data?.receiver_user?.name}</TableCell>
              <TableCell align="center">{data?.transitionname}</TableCell>
          </TableRow>
        ))
          }
     </NormalTable> ) :<CustomLoading />
      }
    
    </PageCard>
  )
}

export default UnitHistory

const columns = ["စဥ်","ရက်စွဲ","ယူနစ်ပမာဏ","မှ","သို့","လုပ်ဆောင်ချက်"];
export const UnitHistoryData = [
    {
      id: "1",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "2",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "3",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "4",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "5",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "6",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "7",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "8",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "9",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
    {
      id: "10",
      date: "2022-05-21",
      transferamount: "+880",
      from: "admin",
      to: "supermaster1",
      transitionname: "deposit-commission",
    },
  ];