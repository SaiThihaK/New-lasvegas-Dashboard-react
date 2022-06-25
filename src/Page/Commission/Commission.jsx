import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { NormalTable, PageCard } from '../../Components';

const Commission = () => {
  const data = [];
  return (
    <PageCard>
      <NormalTable columns={columns} data={data}>
        {CommissionData.map((data, index) => (
          <TableRow key={index}>
            <TableCell align='center'>{data.id}</TableCell>
            <TableCell align='center'>{data.name}</TableCell>
            <TableCell align='center'>{data.commissionname}</TableCell>
            <TableCell align='center'>
              <p style={{ display: 'block' }}>{data.proxy1}</p>
              <p style={{ display: 'block' }}>{data.proxy2}</p>
              <p style={{ display: 'block' }}>{data.proxy3}</p>
            </TableCell>
            <TableCell align='center'>
              <p style={{ display: 'block' }}>{data.percentage1}</p>
              <p style={{ display: 'block' }}>{data.percentage2}</p>
              <p style={{ display: 'block' }}>{data.percentage3}</p>
            </TableCell>
          </TableRow>
        ))}
      </NormalTable>
    </PageCard>
  );
};

export default Commission;

const columns = [
  'စဥ်',
  'ဂုတ်စီးအမည်',
  'ကော်မရှင်အမည်',
  'ကိုယ်စားလှယ်ယူထားသည်များ',
  'ရာခိုင်နှုန်း',
  'အပြင်အဆင်',
  'မှတ်ချက်',
];
export const CommissionData = [
  {
    id: '1',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
  {
    id: '2',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
  {
    id: '3',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
  {
    id: '4',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
  {
    id: '5',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
  {
    id: '6',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
  {
    id: '7',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
  {
    id: '8',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },

  {
    id: '9',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
  {
    id: '10',
    name: 'Kyaw Thiha Soe',
    commissionname: 'Mg Mg',
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
];
