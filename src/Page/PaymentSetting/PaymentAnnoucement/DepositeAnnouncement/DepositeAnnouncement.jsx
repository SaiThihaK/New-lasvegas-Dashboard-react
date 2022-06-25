import React, { useEffect, useState } from 'react'
import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import classes from "./DepositeAnnouncement.module.css"
import { PostMethod } from '../../../../services/api-services';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PageCard } from '../../../../Components';
const DepositeAnnouncement = ({data,render,setRender}) => {
const [textValue,setTextValue] = useState("");
const [open,setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose= ()=>setOpen(false);

useEffect(()=>{
setTextValue(data?.payment_announcement_deposit)
},[data])

const changeAnnouncement = async()=>{
    try{
const response = await axios.request(PostMethod("api/admin/change-configuration-setting",{
    payment_announcement_deposit:textValue
}));
if(response.data.status==="success"){
    toast.success(response.data.message);
    setRender(!render);
    handleClose();
    return;
}
if(response.data.status==="error"){
    toast.error(response.data.message);
    return;
}
    }
    catch(error){
   toast.error(error.response.data.message);
    }
}

  return (
<>
<PageCard title="Deposite WithDraw">
      <div className={classes["card-body"]}>
            {!open ? (<p className={classes["card-text"]}>
                {data?.payment_announcement_deposit}
             </p>):(
               <textarea value={textValue}   onChange={(e)=>setTextValue(e.target.value)}   rows="8" style={{width:'100%'}} />
               )}
               
        </div>
   

 </PageCard>
 <div className={classes["card-body"]}>
 {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
    <Button onClick={()=>{changeAnnouncement();}} variant="contained" >Confirm</Button>
    <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
    </Stack> }
    {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
     <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
     </Stack> } 
    </div>
</>
 
  )
}

export default DepositeAnnouncement