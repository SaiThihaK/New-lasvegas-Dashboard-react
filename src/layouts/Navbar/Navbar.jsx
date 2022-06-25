import React, { useState } from "react";
import Submenu from "./SubMenu";
import classes from "./Navbar.module.css";
import { IconContext } from "react-icons/lib";
import { LeftSidebarData } from "../Sidebar/LeftSidebarData";
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { logoutHandler } from "../../Helper/LogoutHandler";
import { type } from "../../services/Token";
import { MasterSidebarData } from "../../Dashboard/MasterDashboard";
import { CustomGetFunction } from "../../services";




const Navbar = () => {
  type
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data: userData, loading } = CustomGetFunction(`api/get-login-user`, []);
  console.log(userData);
  return (
    <IconContext.Provider value={{ color: "#FFF" }}>
      <div className={classes.container}>
        <ul className={classes["header-noti-icons"]}>
          {
            type !== "admin" && (<li className={classes["unit"]}>
              {/* {data?.wallet?.main_unit} */}
              <div className={classes["main-unit"]}>
                <p> Unit- {userData?.wallet?.main_unit}</p>
              </div>


            </li>)
          }
          <li>
            <Tooltip title="Profile">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              {/* <MenuItem>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem> */}
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={logoutHandler}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </li>
        </ul>
      </div>
      <div
        className={classes.sidebarNav}
      // style={{ left: sidebar ? "0" : "-100%" }}
      >
        <div className={classes["sidebar-header"]}>
          {/* <img src={logo} className={classes.logo} alt="" /> */}
          {/* y<h1 style={{ color: "#FFF" }}>Logo</h1> */}
          <p className={classes["header-text"]}>
            Myanmar LasVegas
          </p>
        </div>
        <div className={classes.sidebarWrap}>

          {type === "master" && (
            MasterSidebarData.map((item, index) =>
              <Submenu item={item} key={index} />)
          )}
          {
            type === "admin" && (
              LeftSidebarData.map((item, index) =>
                <Submenu item={item} key={index} />)
            )}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;