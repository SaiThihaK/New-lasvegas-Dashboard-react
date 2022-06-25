import { Box, Button, Modal, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { PostMethod } from '../../../../services/api-services';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
    overflowY: "auto",
    maxHeight: "calc(100vh - 100px)",
  };
const CreatePaymentTypeModal = ({open,handleClose,render,setRender}) => {
  const [name,setName] = useState("");

  const createPaymentHandler = async()=>{
    try{
   const response = await axios.request(PostMethod(`api/dashboard/payment-types`,{
    name
   }));
   if(response.data.status==="success"){
    toast.success(response.data.message);
    setName("");
    handleClose();
    setRender(!render);
    return;
   }
    }catch(error){
    toast.error(error.response.data.message);
    return;
    }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
     <TextField fullWidth style={{marginBottom:10}} value={name} onChange={(e)=>{setName(e.target.value)}}>

     </TextField>
     <div style={{display:"flex",justifyContent:"flex-end",alignItem:"center"}}>
        <Button variant="contained" size="small" onClick={createPaymentHandler}>ဖန်တီးရန်</Button>
     </div>
          </Box>
      </Modal>
      </div>
  )
}

export default CreatePaymentTypeModal