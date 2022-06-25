import { Button, Stack, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NormalTable, PageCard } from '../../Components';
import { CustomGetFunction } from '../../services';
import classes from './Master.module.css';
const Master = () => {
  const navigate = useNavigate();
  const data = [];
  const { data: master } = CustomGetFunction(
    'api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=master',
    []
  );
  console.log(master);
  return (
    <PageCard title='ဂုတ်စီးများ'>
      <div className={classes['btn-container']}>
        <Button
          variant='contained'
          size='small'
          onClick={() => navigate('/dashboard/createMaster')}
        >
          ဖန်တီးရန်
        </Button>
      </div>
      <NormalTable columns={columns} data={data}>
        {MasterData.map((data, index) => (
          <TableRow key={index}>
            <TableCell align='center'>{data.id}</TableCell>
            <TableCell align='center'>{data.name}</TableCell>
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
            <TableCell align='center'>
              <Stack direction='row' spacing={1}>
                <Button variant='contained' size='small'>
                  ပြင်ဆင်ရန်
                </Button>
                <Button variant='contained' color='error' size='small'>
                  ပိတ်ရန်
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </NormalTable>
    </PageCard>
  );
};

export default Master;
const columns = [
  'စဥ်',
  'အမည်',
  'ကိုယ်စားလှယ်ယူထားသည်များ',
  'ရာခိုင်နှုန်း',
  'အပြင်အဆင်',
  'မှတ်ချက်',
];
export const MasterData = [
  {
    id: '1',
    name: 'Kyaw Thiha Soe',
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
    percentage1: '50%',
    percentage2: '50%',
    percentage3: '50%',
    proxy1: 'ဘောလုံး',
    proxy2: 'နှစ်လုံး',
    proxy3: 'ချဲ',
  },
];
