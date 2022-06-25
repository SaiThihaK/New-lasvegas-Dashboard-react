import { Box, Button, Modal, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import { CustomGetFunction } from '../../../../services';
import { PostMethod } from '../../../../services/api-services';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #FFF',
  borderRadius: '0.5rem',
  p: 4,
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 100px)',
};
const UnitValueModal = ({ open, handleClose, render, setRender, id }) => {
  // const {data:countries} = CustomGetFunction(`api/available-regions?sortColumn=country_name&sortDirection=asc`,[]);
  const [amount, setAmount] = useState('');

  const UpdateUnit = async () => {
    try {
      const response = await axios.request(
        PostMethod(`api/available-regions/update/${id}`, {
          main_unit: amount,
        })
      );
      if (response.data.status === 'success') {
        toast.success(response.data.message);
        handleClose();
        setRender(!render);
        return;
      }
      if (response.data.status === 'error') {
        toast.error(response.data.message);
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <label>Main Unit Amount</label>
          <TextField
            fullWidth
            style={{ marginBottom: 10 }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></TextField>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItem: 'center',
            }}
          >
            <Button variant='contained' size='small' onClick={UpdateUnit}>
              ပြင်ဆင်ရန်
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UnitValueModal;
