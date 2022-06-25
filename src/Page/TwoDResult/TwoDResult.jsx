import { Button, TableCell, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { NormalTable, PageCard, Result2dModal,CustomLoading } from '../../Components'
import { CustomGetFunction } from '../../services'
import { PostMethod } from '../../services/api-services'
import classes from "./TwoDResult.module.css"

const TwoDResult = () => {
  const [open,setOpen] = useState(false);
  const openHandler = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const [value,setValue] = useState("");
  const [time,setTime] = useState("");
  const [render,setRender] = useState(false);

  const {data:setting} = CustomGetFunction(`api/setting`,[]);
  console.log("setting",setting);
  const create2Dresult = async()=>{
    try{
const response = await axios.request(PostMethod(`api/set-lucky-number`,{
  lucky_number:value,
  batch_id:setting.two_d.current_batch.id
}));
if(response.data.status==="success"){
  toast.success(response.data.message);
  handleClose();
  setValue("");
  setRender(render);
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
  const {data,loading} = CustomGetFunction(`api/batchs?status=complete&type=2D`,[]);
  console.log("data",data);
  return (
    <PageCard>
        <div className={classes["btn-container"]}>
            <Button variant="contained" size="small" onClick={openHandler}>အသစ်ဖန်တီးရန်</Button>
        </div>
        {
          loading ? (<NormalTable columns={columns} data={data}>
            {
             data.map((data,index)=>(
                 <TableRow key={index}>
                     <TableCell align="center">{index+1}</TableCell>
                     <TableCell align="center">{data.lucky_number}</TableCell>
                     <TableCell align="center">{data.start_time}</TableCell>
                     <TableCell align="center">
                      <p style={{backgroundColor:"green",color:"white",width:100,padding:5,borderRadius:3}}>{data.status}</p>
                      </TableCell>
                     <TableCell align="center">{data.date}</TableCell>
                     <TableCell align="center">
                         <Button variant="contained" size="small">
                             ပြင်ဆင်ရန်
                         </Button>
                     </TableCell>
                 </TableRow>
             ))
            }
             </NormalTable>):(<CustomLoading />)
        }
       
   <Result2dModal open={open} 
   handleClose={handleClose} label="Two Digit Number" id={2} value={value} setValue={setValue} 
   time={time} 
   submitHandler={create2Dresult}
   />
    </PageCard>
  )
}

export default TwoDResult

const columns = ['စဥ်','နှစ်လုံးထီ','အချိန်','Status','ရက်စွဲ','အပြင်အဆင်'];
export const Result2dData = [
    {
      no: 1,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 2,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 3,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 4,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 5,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 6,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 7,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 8,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 9,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 10,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 11,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 12,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 13,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 14,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 15,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 16,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 17,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 18,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 19,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
    {
      no: 20,
      name: "Kyaw Thiha Soe",
      twod: 23,
      time: "4:30",
      status: "Approved",
      date: "18-05-2022, 4:35 PM",
      amount: 4280000,
    },
  ];
  