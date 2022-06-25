
import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { CustomLoading, NormalTable, PageCard } from '../../Components'
import { CustomGetFunction } from '../../services';

const TwoD = () => {
 const {data,loading} = CustomGetFunction(`api/lottery-report?batch_id=2&type=2D`,[]);
 console.log(data);

  return (
  <PageCard>
    {
        loading ? (<NormalTable columns={columns} data={data}>
            {
               data.map((data,index)=>(
                <TableRow key={index}>
                    <TableCell align="center">{index+1}</TableCell>
                    <TableCell align="center">{data.number}</TableCell>
                    <TableCell align="center">{data.count}</TableCell>
                    <TableCell align="center">{data.total_amount}</TableCell>
                    {/* <TableCell align="center">{data.return_amount}</TableCell> */}
                    <TableCell align="center">{50000-data.total_amount}</TableCell>
                </TableRow>
               )) 
            }
            </NormalTable>):(<CustomLoading />)
    }

  </PageCard>
  )
}

export default TwoD

const columns = ['စဥ်','နှစ်လုံးထီ','ထိုးသည့်အကြိမ်','ပမာဏ',"လက်ကျန်လက်ခံနိုင်မည့်ပမာဏ"];
export const Table2dData = [
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