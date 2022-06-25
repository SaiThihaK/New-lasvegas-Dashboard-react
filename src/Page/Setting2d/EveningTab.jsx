import { Button, Stack, TextField } from '@mui/material';
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { toast } from 'react-toastify';
import {  Switchbutton, TimeZonePicker } from '../../Components'
import { CustomGetFunction } from '../../services';
import { PostMethod, PutMethod } from '../../services/api-services';

// api=api/batch-setting
const MorningTab = () => {
  let today = new Date();
  let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // const {data} = CustomGetFunction(`api/batchs/2`,[]);
  // console.log("batch",data);
    const [time, setTime] = React.useState(new Date().getTime());
    const timeHandler = (newValue) => {
      setTime(newValue);
    };

    console.log("time",time);

    console.log(time);
    const [closeTime, setCloseTime] = React.useState(new Date().getTime());
    const closeTimeHandler = (newValue) => {
      setCloseTime(newValue);
    };
    // useEffect(() => {
    //   setTime(new Date(data.start_time))
    //   setCloseTime(new Date(data.close_time));
    //    }, [data])

  const [amount,setAmount] = useState("");
  const {data:setting} = CustomGetFunction(`api/setting/`,[]); 
  console.log("setting",setting);
  const differenetBody = (status)=>{
    
    
    if(status==="start_time"){
      return{
        start_time:time.toString().split(" ")[4],
        // end_time:closeTime.toString().split(" ")[4],
        date:currentDate,
        batch_id:setting.two_d.evening_batch.id,
        half_day_type:"PM",
        _method:"put",
      }
    }
    if(status==="end_time"){
      return{
        end_time:closeTime.toString().split(" ")[4],
        date:currentDate,
        batch_id:setting.two_d.evening_batch.id,
        half_day_type:"PM",
        _method:"put",
      }
    }
    // if(status==="open"){
    //  return{
    //    date:currentDate,
    //    batch_id:setting.two_d.batch.id,
    //    half_day_type:"AM",
    //    status:"active",
    //    _method:"patch",
    //  }
    // }
    // if(status==="open"){
    //   return{
    //     date:currentDate,
    //     batch_id:setting.two_d.batch.id,
    //     half_day_type:"AM",
    //     status:"diable",
    //     _method:"patch",
    //   }
    //  }
  }
  const onOffSetting = (status)=>{
    //  batch_id:setting.two_d.morning_batch.id,
     if(status==="open"){
     return{
       date:currentDate,
       batch_id:setting.two_d.evening_batch.id,
       half_day_type:"AM",
       status:"active",
       _method:"patch",
     }
    }
    if(status==="close"){
      return{
        date:currentDate,
        batch_id:setting.two_d.evening_batch.id,
        half_day_type:"AM",
        status:"diable",
        _method:"patch",
      }
     }
  }

  const twoDonoff = async(status)=>{
    try{
  const response = await axios.request(PostMethod(`api/batchs/${setting.two_d.evening_batch.id}`,onOffSetting(status)))
  if(response.data.status==="success"){
    toast.success(response.data.message);
    return;
  }
  if(response.data.status==="error"){
    toast.error(response.data.message);
    return
  }
    }catch(error){
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

    const confirmHandler = async(type)=>{
      try{
      const response = await axios.request(PostMethod(`api/2d-time-setting`,differenetBody(type)));
      if(response.data.status==="success"){
        toast.success(response.data.message);
        return;
      }

      if(response.data.status==="error"){
        toast.error(response.data.message)
      }
      }catch(error){
        console.log(error);
        toast.error(error.response.data.message);
        return;
      }
    }
  
    const createAvaliable_amount = async()=>{
      try{
      const response = await axios.request(PostMethod(`api/batchs/`,{
        available_limit:amount,
        _method:"put",
        type:"2D"
      }));
      if(response.data.status==="success"){
      toast.success(response.data.message);
      setAmount("");
      return;
      }
      if(response.data.status==="error"){
        toast.error(response.data.message);
        return;
      }
      }catch(error){
      console.log(error);
      toast.error(error.response.data);
      }
    }

    

  
  return (
    <div>
        <Stack style={stackStyle} spacing={2} direction="row">
      <label style={{width:200,marginTop:10}}>ပွင့်ချိန်</label>
      <TimeZonePicker value={time} handleChange={timeHandler} />
      <Button variant="contained" onClick={()=>confirmHandler("start_time")}>Save</Button>
        </Stack>
        <Stack style={stackStyle} spacing={2} direction="row">
      <label style={{width:200,marginTop:10}}>ပိတ်ချိန်</label>
      <TimeZonePicker value={closeTime} handleChange={closeTimeHandler} />
      <Button variant="contained" onClick={()=>confirmHandler("end_time")}>Save</Button>
        </Stack>
        <Stack style={stackStyle} direction="row" spacing={2}>
  <label style={{width:200,marginTop:10}}>မတ်ချက်</label>
  <p>တစ်နေ့တစ်ကြိမ်ပြင်ဆင်ပေးရန်။မပြင်ပါကထိုးသားထိုးလို့ရတော့မည်မဟုတ်ပါ။
  </p>
</Stack>

<Stack style={stackStyle} direction="row" spacing={2}>
  <label style={{width:200,marginTop:10}}>ညနေပိုင်း</label>
  <Switchbutton openHandler={twoDonoff} closeHandler={twoDonoff}/>
</Stack>

<Stack style={stackStyle} direction="row" spacing={2}>
  <label style={{width:200,marginTop:10}}>လက်ခံမည့်ပမာဏ</label>
  <TextField  label="ယူနစ်" sx={{width:300}} value={amount} onChange={(e)=>setAmount(e.target.value)} />
  <Button variant="contained" onClick={createAvaliable_amount}>Save</Button>
</Stack>
{/* <Stack style={stackStyle} direction="row" spacing={2}>
  <label style={{width:200,marginTop:10}}>အလျော်(ဇ)</label>
  <TextField  label="ယူနစ်" sx={{width:300}}   value={adminOdd} onChange={(e)=>setAdminOdd(e.target.value)} />
  <Button variant="contained">Save</Button>
</Stack> */}
<StackComponent label="သီးသန့်ပိတ်ဂဏန်း">
       <p>မတ်ချက် ။ သီးသန့်ပိတ်ဂဏန်းသည်တစ်ကြိမ်သာအကျူံး၀င်သည် ဥပမာ မနက်ပိုင်းပိတ်ထားသည့်ဂဏန်းသည်ညနေအတွက်အကြုံးမ၀င်ပါ</p>
        </StackComponent>
        <StackComponent label="ထိပ်စီးများ">
       <p>မတ်ချက် ။ ထိပ်စီးသတ်မတ်ပါကပတ်လည်ထိုးမရမည်ဖြစ်မည် ။
        သူသည်လည်းတစ်ပတ်လျင်တစ်ကြိမ်သာအကြုံး၀င်မည်ဖြစ်မည် ။
       </p>
        </StackComponent>
    </div>
  )
}

export default MorningTab

const stackStyle={
    windth:"100%",
    marginBottom:20
}
const StackComponent = ({children,label})=>{
    const stackStyle={
        windth:"100%",
        marginBottom:20
    }
    return(
        <Stack style={stackStyle} direction="row" spacing={2}>
        <label style={{width:200,marginTop:10}}>{label}</label>
       {
        children
       }
      </Stack>  
    )
}