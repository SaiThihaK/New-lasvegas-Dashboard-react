import { Box, Button, Modal, TextField,FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton,Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import {Visibility,VisibilityOff} from "@mui/icons-material"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
    overflowY: "auto",
    maxHeight: "calc(100vh - 100px)",
  };
const CreateUserModal = ({open,handleClose}) => {
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [amount,setAmount] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  // const []
//   const createUser = async()=>{
//     try{
//   if(password !== confirmPassword){
//     toast.error("Passwords don't match");
//     return;
//   }
// const response = await axios.request(PostMethod(`api/users`,{

// }))
//     }catch(error){
//       console.log(error);
//       toast.error(error.response.data.message)
//     }
//   }

  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
     
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-search"
              label="Enter Name"
              type="text"
            />
            <TextField
              sx={{ width: "100%", marginTop: 2 }}
              id="outlined-search"
              label="Enter Phone"
              type="text"
            />
            <TextField
              sx={{ width: "100%", marginTop: 2}}
              id="outlined-search"
              label="Enter Amount"
              type="text"
            />
            <FormControl
              sx={{ m: 1, width: "100%",margin: "16px 0px 0px 0px !important"  }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={()=>setShowPassword(!showPassword)}
                    //   onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, width: "100%", margin: "16px 0px 0px 0px !important"}}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
               Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={()=>setShowPassword(!showPassword)}
                    //   onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>
          </Typography>
          
     <div style={{display:"flex",justifyContent:"flex-end",alignItem:"center",margin:"10px 0px"}}>
        <Button variant="contained" size="small">ပြင်ဆင်ရန်</Button>
     </div>
          </Box>
      </Modal>
      </div>
  )
}

export default CreateUserModal