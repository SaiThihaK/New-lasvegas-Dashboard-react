import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link,useLocation } from "react-router-dom";

const useStyles = makeStyles({
  hover: {
    "&:hover": {
      backgroundColor: "#e8eff4",
    },
  },
  hoversub: {
    "&:hover": {
      color: "#004A99",
    },
  },
  active: {
    background: "#e8eff4",
    borderLeft:'3px solid #004A99',
  },
  activeSub: {
    color:'#004A99',
  },
});

const LeftSidebarMenu = ({ item, path }) => {
  const classes = useStyles();
  const url = useLocation();
  const [subnav, setSubnav] = useState(false);
  console.log(item);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <Link to={item.path}>
        <Box
          onClick={item.subNav && showSubnav}
          className={`${classes["hover"]} ${url.pathname === item.path && classes["active"]}`}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 1,
            cursor: "pointer",
            userSelect: "none",
            paddingBottom: "8px",
            paddingTop: "15px",
          }}
        >
          <Typography sx={{ color: "#686868", marginLeft: 3 }}>
            {item.icon}
          </Typography>
          <Typography
            sx={{
              color: "#686868",
              width: "100%",
              marginLeft: "13px",
              fontSize: "15px",
            }}
          >
            {item.text}
          </Typography>
          <Typography sx={{ marginRight: "15px" }}>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </Typography>
        </Box>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path}>
              <Box
                className={`${classes["hoversub"]} ${url.pathname === item.path && classes["activeSub"]}`}
                sx={{
                  cursor: "pointer",
                  marginLeft: 10,
                  color: "#686868",
                  marginTop: 3,
                  fontSize: "14px",
                  userSelect: "none",
                }}
                key={index}
              >
                {item.text}
              </Box>
            </Link>
          );
        })}
    </>
  );
};

export default LeftSidebarMenu;
