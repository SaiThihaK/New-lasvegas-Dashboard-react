import { Button, TableCell, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { CreatePaymentTypeModal, NormalTable, PageCard,CustomLoading } from '../../../Components'
import EditPaymentTypeModal from '../../../Components/Modal/PaymentSetting/EditPaymentTypeModal/EditPaymentTypeModal'
import { CustomGetFunction } from '../../../services'
import classes from "./PaymentType.module.css"
const PaymentType = () => {
  const [open,setOpen] = useState(false);
  const openHandler = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const [render,setRender] = useState(false);
  const {data,loading} = CustomGetFunction(`api/dashboard/payment-types`,[render]);
  const [id,setId] = useState('');
  const [editOpen,setEditOpen] = useState(false);
  const editOpenHandler = ()=>setEditOpen(true);
  const editCloseHandler = ()=>setEditOpen(false);  
  return (
    <PageCard>
      <div className={classes["btn-container"]}>
        <Button variant="contained" size="small" onClick={openHandler}>
          ဖန်တီးရန်
        </Button>
      </div>
      {
        loading ? (<NormalTable columns={columns} data={data}>
          {
            data.map((data, index) => (
              <TableRow key={index}>
                <TableCell align="center">{data.id}</TableCell>
                <TableCell align="center">{data.name}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" size="small" onClick={()=>{setId(data.id);
                  editOpenHandler();
                  }}>
                    ပြင်ဆင်ရန်
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }
        </NormalTable>):(<CustomLoading />)
      }
      
      <CreatePaymentTypeModal open={open} handleClose={handleClose} render={render} setRender={setRender} />
      <EditPaymentTypeModal open={editOpen} handleClose={editCloseHandler} id={id} render={render} setRender={setRender} />  
    </PageCard>
  )
}

export default PaymentType

const columns = ['စဥ်', 'ငွေသွင်း/ထုတ်အမျိုးအစား', 'လုပ်ဆောင်ချက်'];
