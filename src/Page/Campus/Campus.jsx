import { Box, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { CampusCard,  CreateCampus,  PageCard,CustomLoading, UpdateCampus } from '../../Components'
import { CustomGetFunction } from '../../services'


const btnContainer ={
  display:"flex",
  justifyContent:"flex-end",
  alignItem:"center",
  marginBottom:20
}

const Campus = () => {
  const [open,setOpen] = useState(false);
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const [editOpen,setEditOpen] = useState(false);
  const editOpenHandler = ()=>setEditOpen(true);
  const editHandleClose = ()=>setEditOpen(false);
  const [region,setRegion] = useState({});
  const [render,setRender] = useState(false);
  const {data,loading} = CustomGetFunction(`api/available-regions?sortColumn=country_name&sortDirection=asc`,[render]);

  return (
<PageCard>
<Box>
     <div style={btnContainer}>
      <Button variant='contained' size="small" onClick={handleOpen}>အသစ်ဖန်တီးရန်</Button>
     </div>
     {
      loading ? (<Grid container spacing={2}>
        {
          data?.map((item,index)=>(
            <Grid item xs={2} key={index} onClick={()=>{editOpenHandler();setRegion(item)}}>
              <CampusCard item={item} key={index} />
            </Grid>
          ))
        }
       </Grid>):(<CustomLoading />)
     }
        <CreateCampus open={open} handleClose={handleClose} render={render} setRender={setRender} />
        <UpdateCampus open={editOpen} handleClose={editHandleClose} region={region} render={render} setRender={setRender} />
      </Box>
</PageCard>
  )
}

export default Campus