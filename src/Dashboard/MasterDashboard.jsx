import React from 'react';
// import { AiFillHome } from "react-icons/ai"
// import {
//     RiArrowDownSFill,
//     RiArrowUpSFill,
//     RiAccountPinCircleFill,
// } from "react-icons/ri"
// import { IoIosFootball, IoIosArrowForward } from "react-icons/io"
// import { FaLayerGroup, FaUserFriends, FaMoneyCheckAlt } from "react-icons/fa"
// import { AiFillSetting } from "react-icons/ai"
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import ViewInArIcon from "@mui/icons-material/ViewInAr";
// import GroupIcon from "@mui/icons-material/Group";
// import BadgeIcon from "@mui/icons-material/Badge";
// import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import FileUploadIcon from "@mui/icons-material/FileUpload";
// import LocalAtmIcon from "@mui/icons-material/LocalAtm";
// import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export const MasterSidebarData = [
  {
    text: 'အကျဥ်းချုပ်',
    path: '/dashboard/home',
    icon: <SportsSoccerIcon sx={{ fontSize: 20 }} />,

    // subNav : [
    //     {
    //         title: 'User',
    //         path: '/user',
    //         icon: <IoIosArrowForward />,
    //     },
    //     {
    //         title: 'Revenue',
    //         path: '/revenue',
    //         icon: <IoIosArrowForward />,
    //     },
    // ]
  },
  {
    text: 'ပရိုဖိုင်း',
    path: '/dashboard/master/profile',
    icon: <HomeIcon sx={{ fontSize: 20 }} />,

    // subNav : [
    //     {
    //         title: 'Football',
    //         path: '/betting/football',
    //         icon: <IoIosArrowForward />,
    //     },
    //     {
    //         title: '2D',
    //         path: '/betting/2d',
    //         icon: <IoIosArrowForward />,
    //     },
    //     {
    //         title: '3D',
    //         path: '/betting/3d',
    //         icon: <IoIosArrowForward />,
    //     },
    // ]
  },

  {
    icon: <AccountCircleIcon sx={{ fontSize: 20 }} />,
    text: 'အေးဂျင့်',
    path: '#',
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: '#686868' }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: '#686868' }} />,

    subNav: [
      {
        text: 'အေးဂျင့်အားလုံး',
        path: '/dashboard/master/all-agent',
        icon: <AccountBoxIcon sx={{ fontSize: 20 }} />,
      },
      {
        text: 'အေးဂျင့်စာရင်းသွင်းရန်',
        path: '/dashboard/master/createAgent',
        icon: <AccountBoxIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
  // {
  //     title: "Connect with Chat",
  //     path: '/dashboard/connect-with-chat',
  //     icon: <AiFillSetting />,
  // },
  {
    text: 'အမြတ်',
    path: '/dashboard/master/profit',
    icon: <AttachMoneyIcon sx={{ fontSize: 20 }} />,
  },
  {
    text: 'ငွေထုတ်ရန်',
    path: '/dashboard/master/withdraw',
    icon: <ArrowCircleDownIcon sx={{ fontSize: 20 }} />,
  },
];
