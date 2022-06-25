import { FormControl, MenuItem, Select, TextField, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./EditPaymentProvider.module.css"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";
import { PageCard } from "../../../Components";
import { CustomGetFunction } from "../../../services";
import SelectCoun from "../PaymentProvider/SelectCoun";



const EditPaymentProvider = () => {
const [logo,setlogo] = useState({});
const [country, setCountry] = useState([]);
const [payment_typeValue,setPayment_typeValue] = useState("");
const [providerValue,setProviderValue] = useState("")
const payment_typeChange = e =>setPayment_typeValue(e.target.value);
const providerValueChange = e =>setProviderValue(e.target.value);

const {id} = useParams();
const navigate = useNavigate();
const logoChange = (e) => setlogo(e.target.files[0]);
const {data:providerDetail} = CustomGetFunction(`api/dashboard/payment-providers/${id}`,[id]);
useEffect(()=>{
setPayment_typeValue(providerDetail?.payment_type_id);
setProviderValue(providerDetail?.name)
},[providerDetail])

const EditHandler = async()=>{
try{
let fd = new FormData();
fd.append("logo",logo);
fd.append("name",providerValue)
fd.append("payment_type_id",payment_typeValue);
fd.append("countries",JSON.stringify(country.map((c)=>c.id)));
fd.append("_method","PATCH")
const response = await axios.request(PostMethod(`api/dashboard/payment-providers/${id}`,
fd
));
console.log(response);
if(response.data.status){
  toast.success(response.data.message);
  navigate("/dashboard/paymentProvider");
  return;
}
if(!response.data.status){
  toast.error(response.data.message);
  return;
}
}catch(error){
        toast.error(error.response.data.message)
        if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
        }
      }   
}

 const {data} = CustomGetFunction("api/dashboard/payment-types",[id])
  return (
    <div className={classes["soccer-setting-container"]}>
      <PageCard title='Edit Payment Provider'>
        
        <div className={classes["card-body"]}>
           <FormControl sx={{marginTop:5}} fullWidth>
               <Select size="small" value={payment_typeValue} onChange={payment_typeChange}>
                   {
                    data?.map((paym,index)=>(
                        <MenuItem key={index} value={paym.id}>
                            {
                                paym.name
                            }
                        </MenuItem>
                    ))
                   }
               </Select>

           </FormControl>
           <FormControl sx={{marginTop:5}} fullWidth>
            <label>Provider</label>
            <TextField value={providerValue} onChange={providerValueChange} style={{ border: "none" }} size="small"   />
          </FormControl>
    
          <FormControl sx={{marginTop:5}} fullWidth>
            <label>Provider Logo</label>
            <TextField style={{ border: "none" }} variant="standard"   type="file" accept="image/png, image/jpeg" onChange={logoChange} />
          </FormControl>

          <SelectCoun country={country} setCountry={setCountry} />

          <Button variant="contained" onClick={EditHandler}  style={{ marginTop: 60 }} fullWidth>Edit</Button>
        </div>
      </PageCard>
    </div>

  )
}

export default EditPaymentProvider;



