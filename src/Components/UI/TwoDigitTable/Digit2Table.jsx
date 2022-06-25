import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Digit2table = ({ item,value,setValue }) => {
  return (
    <>
      <Box sx={{ width: "127.8px"}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #e0e0ef",
            borderRight: "1px solid #e0e0ef",
          }}
        >
          <Box>
          <Checkbox sx={{color:'#e0e0ef'}} {...label} onChange={(e) => {
              // add to list
              if (e.target.checked) {
                setValue([
                  ...value,
                  item
                ]);
              } else {
                // remove from list
                setValue(
                  value.filter((data) => data.number !== item.number),
                );
              }
            }}/>
          </Box>
          <Typography style={item.status === "disable"? {color:'red'} : {color:"green"}} component="div">
            {item.number}
            <p style={{fontSize:8}}>{item.available_limit}</p>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Digit2table;