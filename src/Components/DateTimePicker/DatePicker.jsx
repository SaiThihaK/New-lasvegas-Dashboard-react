import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function DatePicker({value,handleChange}) {
 

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
  
        <DesktopDatePicker
          label="ရက်"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{width:300}} />}
        />
        
 
    </LocalizationProvider>
  );
}