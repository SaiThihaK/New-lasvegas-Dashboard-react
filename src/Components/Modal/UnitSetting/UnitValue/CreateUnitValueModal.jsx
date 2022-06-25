import { Box, Button, MenuItem, Modal, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { CustomGetFunction } from '../../../../services';
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
const CreateUnitValueModal = ({open,handleClose,render,setRender,id}) => {
  const {data:countries} = CustomGetFunction(`api/available-regions?sortColumn=country_name&sortDirection=asc`,[]);
  console.log("coun",countries);
  console.log("id",id)

  const [country,setCountry] = useState([]);
  const [amount,setAmount] = useState("");

  const createUnit = async()=>{
    // if(country.length === 0){
    //     toast.warning("Pleae select the Country");
    //     return;
    // }
    try{
    const fd = new FormData();
    fd.append("country_code",country.country_code);
    fd.append("currency_code",country.currency_code);
    fd.append("country_name",country.country_name);
    fd.append("main_unit",amount)
  const response = await axios.request(PostMethod(`api/available-regions/update/${id}`,{
    country_code:country.country_code,
    currency_code:country.currency_code,
    country_name:country.country_name,
    main_unit:amount,
  }));
  if(response.data.status==="success"){
    toast.success(response.data.message);
    handleClose();
    setRender(!render);
    return;
  }
  if(response.data.status==="error"){
    toast.error(response.data.message);
    return;
  }
    }catch(error){
        console.log(error);
        toast.error(error.response.data.message);
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
     <label>Select Country and Currency</label>
     <Select fullWidth style={{marginBottom:10}}>
        {countries.map((coun,index)=>(
            <MenuItem value={coun} key={index} onChange={(e)=>setCountry(e.target.value)}>
            {
                `${coun.country_name}(${coun.currency_code})`
            }
            </MenuItem>
        ))}
     </Select>
     <label>Unit Amount</label>
     <TextField fullWidth style={{marginBottom:10}} value={amount} onChange={(e)=>setAmount(e.target.value)}>

     </TextField>
     <div style={{display:"flex",justifyContent:"flex-end",alignItem:"center"}}>
        <Button variant="contained" size="small" onClick={createUnit}>ပြင်ဆင်ရန်</Button>
     </div>
          </Box>
      </Modal>
      </div>
  )
}

export default CreateUnitValueModal