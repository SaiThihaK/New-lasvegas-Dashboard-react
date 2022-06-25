import { Button, TableRow, TableCell } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import {
  CreateUnitModal,
  NormalTable,
  PageCard,
  CustomLoading,
} from '../../../Components';
import { CustomGetFunction } from '../../../services';

import classes from './CreateUnit.module.css';

const columns = ['စဥ်', 'ရက်စွဲ', 'ယူနစ်', 'ဖန်တီးသူအမည်', 'ရာထူး'];
const CreateUnit = () => {
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState([]);
  const openHandler = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [render, setRender] = useState(true);
  // const [loading, setLoading] = useState(false);
  // const key = localStorage.getItem('l-token');

  const { data, loading } = CustomGetFunction(
    'api/wallet/admin-create-record',
    [render]
  );

  return (
    <PageCard>
      <div className={classes['btn-container']}>
        <Button variant='contained' color='success' onClick={openHandler}>
          ယူနစ်အသစ်ဖန်တီးရန်
        </Button>
      </div>
      <div className={classes['table-margin']}>
        {loading ? (
          <NormalTable columns={columns} data={data}>
            {data.map((unit, index) => (
              <TableRow key={index}>
                <TableCell align='center'>{unit.id}</TableCell>
                <TableCell align='center'>{unit.created_at}</TableCell>
                <TableCell align='center'>{unit.amount}</TableCell>
                <TableCell align='center'>{unit.creatorname}</TableCell>
                <TableCell align='center'>{unit.user.name}</TableCell>
              </TableRow>
            ))}
          </NormalTable>
        ) : (
          <CustomLoading />
        )}
      </div>

      <CreateUnitModal
        open={open}
        handleClose={handleClose}
        render={render}
        setRender={setRender}
      />
    </PageCard>
  );
};

export default CreateUnit;
