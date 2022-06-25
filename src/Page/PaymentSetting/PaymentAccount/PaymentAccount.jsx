import { Avatar, Button, IconButton, Stack, TableCell, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { CreatePaymentAccountModal, CustomLoading, NormalTable, PageCard } from '../../../Components'
import {Edit} from "@mui/icons-material"
import classes from "./PaymentAccount.module.css"
import { CustomGetFunction } from '../../../services'
import { useNavigate } from 'react-router-dom'
const PaymentAccount = () => {
  const [open,setOpen] = useState(false);
  const openHandler = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const navigate = useNavigate();
  const [render,setRender] = useState(false);
  const {data,loading} = CustomGetFunction(`api/dashboard/payment-accounts`,[render]);
  return (
    <PageCard>
        <div className={classes["btn-container"]}>
     <Button variant="contained" size="small" onClick={openHandler}>ပြင်ဆင်ရန်</Button>
        </div>
        {
          loading ? (<NormalTable columns={columns} data={data}>
            {
              data.map((data,index)=>(
                  <TableRow key={index}>
                      <TableCell align="center">{index+1}</TableCell>
                      <TableCell align="center">{data.payment_type}</TableCell>
                      <TableCell align="center">{data.payment_provider.name}</TableCell>
                      <TableCell align="center">
                          <Avatar src={data.logo} />
                      </TableCell>
                      <TableCell align="center">{data.account_no}</TableCell>
                      <TableCell align="center">{data.name}</TableCell>
                      <TableCell align="center">
                          <Stack direction="row" spacing={1}>
                              <IconButton onClick={()=>navigate(`/dashboard/editPaymentAccount/${data.id}`)}><Edit/></IconButton>
                              {/* <IconButton><Delete/></IconButton> */}
                          </Stack>
                      </TableCell>
                  </TableRow>
              ))
            }
            </NormalTable>) : (<CustomLoading />)
        }
      
      <CreatePaymentAccountModal open={open} handleClose={handleClose} render={render} setRender={setRender}/>
    </PageCard>
  )
}

export default PaymentAccount

const columns = ['စဥ်','ငွေသွင်း/ထုတ်အမျိုးအစား','ငွေသွင်း/ထုတ်အမျိုးကွဲ','လိုဂို','အကောင့်နံပါတ်','အကောင့်နာမည်','လုပ်ဆောင်ချက်'];

  