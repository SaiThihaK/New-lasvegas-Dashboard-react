import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { LeftSidebarData } from "./LeftSidebarData";
import LeftSidebarMenu from "./LeftSidebarMenu";



const LeftSidebar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Avatar
          sx={{ position: "static !important",marginRight:2 }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "15px", fontWeight: "bold" }}
          >
            Welcome Admin
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "13px", color: "#686868" }}
          >
            Super Admin
          </Typography>
        </Box>
      </Box>
      {LeftSidebarData?.map((item, index) => (
        <LeftSidebarMenu item={item} key={index} /> 
      ))}
    </>
  );
};

export default LeftSidebar;
