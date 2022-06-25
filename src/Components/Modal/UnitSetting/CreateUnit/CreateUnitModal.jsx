import { Box, Button, Modal, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { PostMethod } from '../../../../services/api-services';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #FFF",
  borderRadius: "0.5rem",
  p: 4,
  overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
};
const CreateUnitModal = ({ open, handleClose, render, setRender }) => {
  const [amount, setAmount] = useState("");
  const createUnit = async () => {
    try {
      const response = await axios.request(PostMethod(`api/wallet/admin-create`, {
        amount
      }));
      if (response.data.status === "success") {
        toast.success(response?.data?.message);
        setAmount("");
        setRender(!render);
        handleClose();
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField fullWidth type="number" style={{ marginBottom: 10 }} value={amount} onChange={(e) => setAmount(e.target.value)}>

          </TextField>
          <div style={{ display: "flex", justifyContent: "flex-end", alignItem: "center" }}>
            <Button variant="contained" size="small" onClick={createUnit}>ဖန်တီးရန်</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateUnitModal