import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const CampusCard = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes["cardcontainer"]}>
        <img className={classes["image"]} src={item.logo} alt="Country LogoC" />
        <Box className={classes["cardbox"]}>
          <Typography sx={{fontSize:13,color:'#686868'}}>နိုင်ငံ</Typography>
          <Typography sx={{textAlign:'center',marginRight:'10px',marginLeft:'24px',color:'#686868'}}>-</Typography>
          <Typography sx={{ fontSize: 13, marginLeft: 1 ,color:'#686868'}}>
            {item.country_name}
          </Typography>
        </Box>
        <Box className={classes["cardbox"]}>
          <Typography sx={{fontSize:13,color:'#686868'}}>ငွေကြေး -</Typography>
          <Typography sx={{ fontSize: 13, marginLeft: 1,color:'#686868' }}>
            {item.currency_code}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default CampusCard;
const useStyles = makeStyles({
  cardcontainer: {
    border: "1px solid #e0e0ef",
    padding: 15,
    background: "#f5f5f5",
    width: "100%",
    marginBottom: 13,
    borderRadius: 10,
    marginLeft: 13,
    boxShadow:
      "0 0 3px 0 rgb(43 43 43 / 10%), 0 5px 6px -7px rgb(43 43 43 / 10%)",
    cursor: "pointer",
  },
  cardbox: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: "100%",
    borderRadius: 10,
    height: "70px",
    boxShadow:
      "0 0 3px 0 rgb(43 43 43 / 10%), 0 10px 6px -7px rgb(43 43 43 / 10%)",
  },
});


