
import {  TableCell, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { CreateUserModal, NormalTable, PageCard } from '../../Components'
// import classes from "./Users.module.css"
import {CustomGetFunction} from "../../services"
import {CustomLoading} from "../../Components"
const Users = () => {
  const [open,setOpen] = useState(false);
  const openHandler = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);

  const {data,loading} = CustomGetFunction(`api/users?sortColumn=id&sortDirection=desc&limit=30&type=customer`,[]);

  return (
   <PageCard>
    
    {
      loading ? (
      <NormalTable columns={columns} data={data}>
        {
         data.map((data,index)=>(
             <TableRow key={index}>
                 <TableCell align="center">{index+1}</TableCell>
                 <TableCell align="center">{data.id}</TableCell>
                 <TableCell align="center">{data.name}</TableCell>
                 <TableCell align="center">{data.phone}</TableCell>
                 <TableCell align="center">{data.wallet.main_unit}</TableCell>
                 <TableCell align="center">{data.region}</TableCell>
                 <TableCell align="center">
                     <p style={{backgroundColor:'green',color:'white',padding:2,borderRadius:2}}>{data.status}</p>
                 </TableCell>
                 <TableCell align="center">{data.date}</TableCell>
                 <TableCell align="center">'
   
                 </TableCell>
             </TableRow>
         ))
        }
     </NormalTable>) : (<CustomLoading />)
    }
 
    <CreateUserModal open={open} handleClose={handleClose} />
       </PageCard> 
  )
}

export default Users

const columns = ['စဥ်','ထိုးသားအမှတ်','ထိုးသားအမည်','ဖုန်းနံပါတ်','လက်ကျန်ယူနစ်','တည်နေရာ','Status','မှတ်ပုံတင်ရက်စွဲ'];


  