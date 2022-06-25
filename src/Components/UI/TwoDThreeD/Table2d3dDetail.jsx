import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hover: {
    "&:hover": {
      backgroundColor: "#004A99",
      transition:'.3s',
    },
  },
});

const Table2d3dDetail = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ width: "127.8px" }}>
        <Box
          sx={{
            padding: "10px 5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #e0e0ef",
            borderRight: "1px solid #e0e0ef",
          }}
        >
          <Typography
            className={classes.hover}
            sx={{
              background: "#077ED5",
              color: "#fff",
              borderRadius: "25px",
              width: "25px",
              height: "25px",
              padding: "3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {item.number}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              background: "#04B76B",
              padding: "5px 10px",
              borderRadius: 5,
              fontSize: "14px",
            }}
          >
            {item.amount}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Table2d3dDetail;
