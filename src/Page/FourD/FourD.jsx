import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { NormalTable, PageCard } from '../../Components'

const FourD = () => {
    const data = [];
  return (
  <PageCard>
    <NormalTable columns={columns} data={data}>
    {
    ThreedData.map((data,index)=>(
        <TableRow key={index}>
       <TableCell align="center">{data.no}</TableCell>
       <TableCell align="center">3456</TableCell>
       <TableCell align="center">489</TableCell>
       <TableCell align="center">{data.twod}</TableCell>
       <TableCell align="center">{data.amount}</TableCell>
       <TableCell align="center">{data.profitandloss}</TableCell>
        </TableRow>
    ))
   }
    </NormalTable>
  </PageCard>
  )
}

export default FourD

const columns = ['စဥ်','စင်ကာပူထီ','ထိုးသည့်အကြိမ်','ပမာဏ','လျှော်ရမည့်ပမာဏ','အရှုံး/အမြတ်'];
export const ThreedData = [
    {
      no: 1,
      twod: "48",
      bets: "23",
      amount: 4280000,
      bingo: 120000000,
      profitandloss: -703761880,
    },
    {
        no: 2,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 3,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 4,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 5,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 6,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 7,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 8,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 9,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 10,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 11,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 12,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 13,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 14,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 15,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 16,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 17,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 18,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 19,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
    {
        no: 20,
        twod: "48",
        bets: "23",
        amount: 4280000,
        bingo: 120000000,
        profitandloss: -703761880,
    },
  ];