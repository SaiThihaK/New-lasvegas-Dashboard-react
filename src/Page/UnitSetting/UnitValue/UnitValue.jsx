import { Button, Typography } from '@mui/material';
import React, { lazy, useState } from 'react';
import { PageCard, UnitValueModal } from '../../../Components';
import { CustomGetFunction } from '../../../services';
import classes from './UnitValue.module.css';

const CreateUnitValueModal = lazy(() =>
  import('../../../Components/Modal/UnitSetting/UnitValue/CreateUnitValueModal')
);
const UnitValue = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const createOpenHandler = () => setCreateOpen(true);
  const createCloseHandler = () => setCreateOpen(false);
  const [render, setRender] = useState(false);
  const { data: countries } = CustomGetFunction(
    `api/available-regions?sortColumn=country_name&sortDirection=asc`,
    [render]
  );
  console.log(countries);
  return (
    <PageCard title='Unit Value'>
      <div className={classes['btn-container']}>
        <Button variant='contained' onClick={createOpenHandler}>
          ယူနစ်အသစ်ဖန်တီးရန်
        </Button>
      </div>
      {countries.map((coun, index) => (
        <div className={classes['unitValue']} key={index}>
          {coun.main_unit && (
            <>
              <p style={{ width: 200 }}>
                1{coun.currency_code} = {coun.main_unit}main_unit
              </p>
              <Button
                variant='contained'
                size='small'
                onClick={() => {
                  openHandler();
                  setId(coun.id);
                }}
              >
                ပြင်ဆင်ရန်
              </Button>
            </>
          )}
        </div>
      ))}

      <UnitValueModal
        open={open}
        handleClose={handleClose}
        render={render}
        setRender={setRender}
        id={id}
      />
      <CreateUnitValueModal
        open={createOpen}
        handleClose={createOpenHandler}
        id={id}
        render={render}
        setRender={setRender}
      />
    </PageCard>
  );
};

export default UnitValue;
