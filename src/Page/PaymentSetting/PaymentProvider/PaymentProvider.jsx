import { Avatar, Button, IconButton, Stack, TableCell, TableRow } from '@mui/material'
import React from 'react'
import {  CustomLoading, NormalTable, PageCard } from '../../../Components'
import {Edit,Delete} from "@mui/icons-material"
import { CustomGetFunction } from '../../../services'
import { useNavigate } from 'react-router-dom'
const PaymentProvider = () => {
 
  const navigate = useNavigate();
  const {data,loading} = CustomGetFunction(`api/dashboard/payment-providers`,[]);
  console.log("data",data);
  return (
    <PageCard>
      <div style={{display:"flex",justifyContent:"flex-end",alignItem:"center",marginBottom:20}}>
        <Button size="small" variant="contained" onClick={()=>navigate("/dashboard/create-paymentProvider")}>
          ပြင်ဆင်ရန်
        </Button>
      </div>
      {
        loading ? (   <NormalTable columns={columns} data={data}>
          {
              data.map((data,index)=>(
                  <TableRow key={index}>
                      <TableCell align="center">{data.id}</TableCell>
                      <TableCell align="center">{data.payment_type}</TableCell>
                      <TableCell align="center">{data.name}</TableCell>
                      <TableCell align='center'>
                          <Avatar src={data.logo} />
                      </TableCell>
                      <TableCell align='center'>
                          <Stack direction="row" spacing={1}>
                              <IconButton onClick={()=>navigate(`/dashboard/edit-paymentProvider/${data.id}`)}><Edit/></IconButton>
                              <IconButton><Delete/></IconButton>
                          </Stack>
                      </TableCell>
                  </TableRow>
              ))
          }
          </NormalTable> ) :(<CustomLoading />)
      }
     
        {/* <CreatePaymentProviderModal open={open} handleClose={handleClose} render={render} setRender={setRender} /> */}
    </PageCard>
  )
}

export default PaymentProvider
const columns = ['စဥ်','ငွေသွင်း/ထုတ်အမျိုးအစား','ငွေသွင်း/ထုတ်အမျိုးကွဲ','လိုဂို','လုပ်ဆောင်ချက်'];
export const PaymentproviderData = [
    {
      id: "1",
      paymenttype: "Online Payment",
      paymentprovider: "Aya Bank",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_aya_bank.jpg",
    },
    {
      id: "2",
      paymenttype: "CryptoCurrency Payment",
      paymentprovider: "CB Pay",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_cbpay.jpg",
    },
    {
      id: "3",
      paymenttype: "Online Payment",
      paymentprovider: "CB Bank",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_cb.jpg",
    },
    {
      id: "4",
      paymenttype: "Bank Payment",
      paymentprovider: "KbZ Banking",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_kbz.jpg",
    },
    {
      id: "5",
      paymenttype: "Online Payment",
      paymentprovider: "Aya Bank",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_aya_bank.jpg",
    },
    {
      id: "6",
      paymenttype: "Online Payment",
      paymentprovider: "Aya Bank",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_aya_bank.jpg",
    },
    {
      id: "7",
      paymenttype: "Online Payment",
      paymentprovider: "Aya Bank",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_aya_bank.jpg",
    },
    {
      id: "8",
      paymenttype: "Online Payment",
      paymentprovider: "Wave Money",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_wave_pay.jpg",
    },
    {
      id: "9",
      paymenttype: "Online Payment",
      paymentprovider: "Yoma Banking",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_yoma.jpg",
    },
    {
      id: "10",
      paymenttype: "Online Payment",
      paymentprovider: "Aya Bank",
      url: "https://dynasity.nyc3.digitaloceanspaces.com/xzonebet-upload/payment_providers/xzonebet_aya_bank.jpg",
    },
  ];
  