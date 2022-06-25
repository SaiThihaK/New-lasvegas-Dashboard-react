import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export default function TimeZonePicker({value,handleChange}) {
 
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
     
        <TimePicker
          label="နာရီ"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{width:300}} />}
        />
        
   
    </LocalizationProvider>
  );
}
