import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { PageCard } from '../../Components'
import { PostMethod } from '../../services/api-services'
import classes from "./GeneralSetting.module.css"
const GeneralSetting = () => {
 const [twoD_time,settwoD_time] = useState("");
 const twoDOdd = async()=>{
    try{
        const response = await axios.request(PostMethod(`api/setting`,{
            time:twoD_time,
            _method:"put"
            }));
  if(response.data.status==="success"){
    toast.success(response.data.message);
    settwoD_time("");
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
   <PageCard title="General Setting">
    <div className={classes["card-body"]}>
    <ContainerComponenet label={"နှစ်လုံးထီအလျော်"}>
     <TextField size="small" sx={{width:300}} value={twoD_time} onChange={(e)=>settwoD_time(e.target.value)} />
     <Button onClick={twoDOdd}>Save</Button>
    </ContainerComponenet>

    <ContainerComponenet label={"သုံးလုံးထီအလျော်"}>
     <TextField size="small" sx={{width:300}} />
     <Button>Save</Button>
    </ContainerComponenet>
    </div>
   </PageCard>
  )
}

export default GeneralSetting

const ContainerComponenet = ({label,children})=>{
    return(
        <Stack direction="row" spacing={2} style={{width:"100%",display:"flex",justifyContent:"center",alignItem:"center",marginBottom:20}}>
    <label className={classes["label"]}>{label}</label>
    {
        children
    }
        </Stack>
    )
}