import React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { CustomGetFunction } from "../../../services";
import { useState } from "react";
import { PostMethod } from "../../../services/api-services";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";






const UpdateCampus = ({ 
  open, 
  handleClose,
  region,
  render,
  setRender
}) => {
  const [counCode,setCounCode] = useState("");
  const [currCode,setCurrCode] = useState("");
  const [logo,setlogo] = useState({});
  const logoChange = (e)=>setlogo(e.target.files[0])
  console.log("GetRegion",region);
 
  const {data:countries} = CustomGetFunction(`api/countries`,[]);
  const {data:currency} = CustomGetFunction(`api/currencies`,[]);

  useEffect(()=>{
    setCounCode({code:region?.country_code,name:region?.country_name});
    setCurrCode(region.currency_code);
  },[region])
  const [amount,setAmount] = useState("");
  const updateCampus = async()=>{
    try{
    const fd = new FormData();
    fd.append("logo",logo);
    fd.append("country_code",counCode.code);
    fd.append("country_name",counCode.name);
    fd.append("currency_code",currCode)
    fd.append("main_unit",amount)
   const response = await axios.request(PostMethod(`api/available-regions/update/${region.id}`,fd));
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
   toast.error(error.response.data.error);
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
        
            <div style={{marginTop:20}}>
                <label>Country</label>
                <Select size="small" fullWidth value={counCode} onChange={(e)=>setCounCode(e.target.value)}>
                    {
                   countries.map((coun,index)=>(
                    <MenuItem value={coun} key={index}>
                        {coun.name}
                    </MenuItem>
                   ))
                    }
                </Select>
            </div>
            
            <div style={{marginTop:20}}>
                <label>Currency</label>
                <Select size="small" fullWidth value={currCode} onChange={(e)=>setCurrCode(e.target.value)}>
                    {
                   currency.map((curr,index)=>(
                    <MenuItem value={curr.code} key={index}>
                        {`${curr.name}(${curr.code})`}
                    </MenuItem>
                   ))
                    }
                </Select>
            </div>
            <FormControl sx={{marginTop:5}} fullWidth>
            <label>Choose Provider Logo</label>
            <TextField style={{ border: "none" }}  variant="standard" type="file" accept="image/png, image/jpeg" onChange={logoChange} />
          </FormControl>
          <FormControl sx={{marginTop:5}} fullWidth>
            <label>Main Unit</label>
          <TextField style={{ border: "none" }}  variant="standard" value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
          </FormControl>
            <div style={{display:"flex",justifyContent:"flex-end",alignItem:"center",marginTop:20}}>
                <Button variant="contained" size="small" onClick={updateCampus}>ဖန်တီးရန်</Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
};
export default UpdateCampus;

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