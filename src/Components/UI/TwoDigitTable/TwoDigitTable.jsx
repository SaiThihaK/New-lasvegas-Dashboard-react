import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { CustomGetFunction } from '../../../services'
import { PostMethod } from '../../../services/api-services'
import CustomLoading from '../../CustomLoading/CustomLoading'
import Digit2table from './Digit2Table'
import classes from "./TwoDigitTable.module.css"
const TwoDigitTable = () => {
  const [twoDigit,setTwoDigit] = useState([]);
  const [amount,setAmount] = useState("");
  const [render,setRender] = useState(false);
  const {data:twoDnumber,loading} = CustomGetFunction(`api/lottery-numbers?type=2D`,[render]);
  console.log("twoDnumber",twoDnumber);
  const enableDisableHandler = async(status)=>{
  try{
  const response = await axios.request(PostMethod(`api/lottery-number-setting`,{
  _method:"put",
  type:"2D",
  status:status,
  lotterys_id:JSON.stringify(twoDigit.map((tw)=>tw.id))
  }));
  if(response.data.status==="error"){
    toast.error(response.data.message);
    return;
  }
  if(response.data.status==="success"){
    toast.success(response.data.message);
    setRender(!render);
    return;
  }
    }catch(error){
     console.log(error)
     toast.error(error.response.data.status);
    }
  }
  
const handleAmount = async()=>{
  try{
    const response = await axios.request(PostMethod(`api/lottery-number-setting`,{
      _method:"put",
      type:"2D",
      status:"active",
      lotterys_id:JSON.stringify(twoDigit.map((tw)=>tw.id)),
      available_limit:amount

    }));
  if(response.data.status==="success"){
   toast.success(response.data.message);
   setAmount("");
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
};
  
  
  return (
    <div>
<Typography 
    component="div"
    style={{
    backgroundColor:"var(--main-color)",
    color:"white",
    padding:10
    }}>'2 Digit(Disable & Enable Selected Numbers)</Typography>
 
 {
        twoDigit.length !==0 && (
        <div className={classes['container']}>
        <Stack direction="row" spacing={1} style={{flexGrow:1}}>
       <Button variant="outlined" onClick={()=>enableDisableHandler("active")}>Enable</Button>
       <Button variant="outlined" color="error" onClick={()=>enableDisableHandler("disable")}>Disable</Button>
        </Stack>
        <div>
          <TextField size='small' type="number" sx={{width:250}} value={amount} onChange={(e)=>setAmount(e.target.value)} />
         <Button onClick={handleAmount}>Submit</Button>
        </div>
        </div>
        )
      }
  {
    loading ? (<Box
      sx={{
        padding: 3,
        background: "#fff",
        borderBottomLeftRadius:7,
        borderBottomRightRadius:7,
        border:'1px solid #e0e0ef',
      }}
    >
      <Box sx={{display:'flex',flexWrap:'wrap',borderLeft:'1px solid #e0e0ef',borderTop:'1px solid #e0e0ef',minHeight:400}}>
        {twoDnumber?.map((item, index) => (
          <Digit2table item={item} key={index} value={twoDigit} setValue={setTwoDigit}/>
        ))}
      </Box>
    </Box>):(<CustomLoading />)
  }
  

    </div>
  )
}

export default TwoDigitTable