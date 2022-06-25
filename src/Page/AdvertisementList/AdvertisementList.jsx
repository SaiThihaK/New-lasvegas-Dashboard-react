import { Delete, Edit } from '@mui/icons-material'
import { Button, IconButton, Stack, TableCell, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { CreateAdvertisementModal, NormalTable, PageCard } from '../../Components'


const btnStyle={
    display:"flex",
    justifyContent:"flex-end",
    alignItem:"center",
    marginBottom:20
}
const AdvertisementList = () => {
  const [open,setOpen] = useState(false);
  const openHandler=()=>setOpen(true);
  const handleClose=()=>setOpen(false);
  const data = [];
  return (
    <PageCard>
        <div style={btnStyle}>
       <Button size="small" variant="contained" onClick={openHandler}>အသစ်ဖန်တီးရန်</Button>
        </div>
        <NormalTable columns={columns} data={data}>
      {
        AdvertiselistData.map((data,index)=>(
            <TableRow key={index}>
                <TableCell align="center">{data.no}</TableCell>
                <TableCell align="center">{data.title}</TableCell>
                <TableCell align="center">
                    <img src={data.url} width="200" />
                </TableCell>
                <TableCell align="center">
               <Stack direction="row" spacing={1}>
               <IconButton><Edit /></IconButton>
               <IconButton><Delete /></IconButton>
               </Stack>

                </TableCell>
            </TableRow>
        ))
      }
        </NormalTable>
        <CreateAdvertisementModal open={open} handleClose={handleClose} />
    </PageCard>
  )
}

export default AdvertisementList

const columns = ['စဥ်','ခေါင်းစဥ်','ဓာတ်ပုံ','အပြင်အဆင်'];
export const AdvertiselistData = [
    {
      no: "1",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "2",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "3",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "4",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "5",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "6",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "7",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "8",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "9",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
    {
      no: "10",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est numquam explicabo sit quam adipisci eos deserunt nihil nam pariatur itaque veniam vitae dolores sed, voluptates eius officia laborum recusandae?",
      url: "https://play-lh.googleusercontent.com/-vCcYcKrYsGt_gp3xrzdqS6KKjL9xcIaXGhfj2sf59rxZzw0ixcQ_PXuoKYQiC5z6g=w1024-h500",
    },
  
  ];
  