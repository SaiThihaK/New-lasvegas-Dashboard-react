import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import GroupIcon from "@mui/icons-material/Group";
import BadgeIcon from "@mui/icons-material/Badge";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const LeftSidebarData = [
  {
    icon: <HomeIcon sx={{ fontSize: 20 }} />,
    text: "အကျဥ်းချုပ်",
    path: "/dashboard/summary",
  },
  {
    icon: <HomeIcon sx={{ fontSize: 20 }} />,
    text: "နယ်နမိတ်",
    path: "/dashboard/campus",
  },
  // {
  //   icon: <SportsSoccerIcon sx={{ fontSize: 20 }} />,
  //   text: "Football",
  //   path: "/football",
  // },
  {
    icon: <SettingsIcon sx={{ fontSize: 20 }} />,
    text: "ယူနစ်",
    path: "#",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

    subNav: [
      {
        text: "ယူနစ်အသစ်ဖန်တီးခြင်း",
        path: "/dashboard/createUnit",
      },
      {
        text: "ယူနစ်တန်ဖိုးသတ်မှတ်ခြင်း",
        path: "/dashboard/unitValue",
      },
      {
        text: "ယူနစ်နှင့်ပတ်သတ်သောမှတ်တမ်းများ",
        path: "/dashboard/unitHistory",
      },
    ],
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 20 }} />,
    text: "ဘဏ်အကောင့်",
    path: "#",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

    subNav: [
      {
        text: "ငွေသွင်း/ထုတ်အမျိုးအစား",
        path: "/dashboard/paymentType",
      },
      {
        text: "ငွေသွင်း/ထုတ်အမျိုးကွဲ",
        path: "/dashboard/paymentProvider",
      },
      {
        text: "ငွေသွင်း/ထုတ်အကောင့်",
        path: "/dashboard/paymentAccount",
      },
      {
        text: "ငွေသွင်း/ထုတ်စည်းမျဥ်း",
        path: "/dashboard/paymentAnnouncement",
      },
    ],
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 20 }} />,
    text: "Promotion",
    path: "#",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,
    subNav:[
      {
        text:"Daily Cash Back User %",
        path:"daily-cash-back-user"
      },
      {
        text:"Special Festival Promotion %",
        path:"special-festival-promotion"
      },
      {
        text:"User level အလိုက်",
        path:"user-level"
      },
      {
        text:"Deposite Promotion",
        path:"deposite-promotion"
      }
    ]
  },
  {
    icon: <ViewInArIcon sx={{ fontSize: 20 }} />,
    text: "ဂုတ်စီး",
    path: "/dashboard/master",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

    // subNav: [
    //   {
    //     text: "2D Results",
    //     path: "/result2d",
    //   },
    //   {
    //     text: "3D Results",
    //     path: "/result3d",
    //   },
    //   {
    //     text: "2D Internet Number",
    //     path: "/Table3d",
    //   },
    // ],
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 20 }} />,
    text: "ကော်မရှင်",
    path: "/dashboard/commission",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

    // subNav: [
    //   {
    //     text: "2D Winner",
    //     path: "/winner2d",
    //   },
    //   {
    //     text: "3D Winner",
    //     path: "/winner3d",
    //   },
    // ],
  },
  {
    icon: <LocalAtmIcon sx={{ fontSize: 20 }} />,
    text: "ထိုးသား",
    path: "/dashboard/users",
  },
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 20 }} />,
    text: "ဘောလုံး",
    path: "/dashboard/football",
  },
  {
    icon: <GroupIcon sx={{ fontSize: 20 }} />,
    text: "၂ လုံးထီ",
    path: "/dashboard/2d",
  },
  {
    icon: <BadgeIcon sx={{ fontSize: 20 }} />,
    text: "ချဲ(၃လုံး)",
    path: "/dashboard/3d",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

    // subNav: [
    //   {
    //     text: "Agent Lists",
    //     path: "/agentlists",
    //   },
    //   {
    //     text: "2D",
    //     path: "/twod",
    //   },
    //   {
    //     text: "3D",
    //     path: "/threed",
    //   },
    // ],
  },
  {
    icon: <BadgeIcon sx={{ fontSize: 20 }} />,
    text: "စင်ကာပူထီ",
    path: "/dashboard/4d",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

    // subNav: [
    //   {
    //     text: "Agent Lists",
    //     path: "/agentlists",
    //   },
    //   {
    //     text: "2D",
    //     path: "/twod",
    //   },
    //   {
    //     text: "3D",
    //     path: "/threed",
    //   },
    // ],
  },
  {
    icon: <GroupIcon sx={{ fontSize: 20 }} />,
    text: "ပေါက်ဂဏန်း",
    path: "#",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

    subNav: [
      {
        text: "နှစ်လုံးထီ",
        path: "/dashboard/result2d",
      },
      {
        text: "ချဲ",
        path: "/dashboard/result3d",
      },
      {
        text: "စင်ကာပူထီ",
        path: "/dashboard/result4d",
      },
    ],
  },
  {
    icon: <GroupIcon sx={{ fontSize: 20 }} />,
    text: "ထိုးစာရင်း",
    path: "#",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

    subNav: [
      {
        text: "ဘောလုံး",
        path: "/dashboard/listfootball",
      },
      {
        text: "နှစ်လုံးထီ",
        path: "/dashboard/list2d",
      },
      {
        text: "ချဲ",
        path: "/dashboard/list3d",
      },
      {
        text: "စင်ကာပူထီ",
        path: "/dashboard/list4d",
      },
    ],
  },
  {
    icon: <GroupIcon sx={{ fontSize: 20 }} />,
    text: "အပြင်အဆင်",
    path: "#",
    iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
    iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,
    subNav:[
      {
        text:"နစ်လုံးထီ",
        path:"dashboard/2d-setting"
      },
      {
        text:"သုံးလုံးထီ",
        path:"dashboard/3d-setting"
      },
      {
        text:"အထွေထွေပြင်ဆင်",
        path:"/dashboard/general-setting"
      }
    ]
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: 20 }} />,
    text: "ကြော်ညာ",
    path: "/dashboard/advertisementList",
  },
  {
    icon: <FileUploadIcon sx={{ fontSize: 20 }} />,
    text: "အနှစ်ချုပ်",
    path: "/dashboard/topup",
  },
  {
    icon: <FileUploadIcon sx={{ fontSize: 20 }} />,
    text: "ငွေသွင်း",
    path: "/dashboard/deposite",
  },
  {
    icon: <FileUploadIcon sx={{ fontSize: 20 }} />,
    text: "ငွေထုတ်",
    path: "/dashboard/withdraw",
  },
  // {
  //   icon: <TableViewIcon sx={{ fontSize: 20 }} />,
  //   text: "Table",
  //   path: "#",
  //   iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
  //   iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

  //   subNav: [
  //     {
  //       text: "2D Table",
  //       path: "/2dtable",
  //     },
  //     {
  //       text: "3D Table",
  //       path: "/3dtable",
  //     },
  //   ],
  // },
  // {
  //   icon: <ReportGmailerrorredIcon sx={{ fontSize: 20 }} />,
  //   text: "Report",
  //   path: "#",
  //   iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
  //   iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

  //   subNav: [
  //     {
  //       text: "2D Reports",
  //       path: "/report2d",
  //     },
  //     {
  //       text: "3D Reports",
  //       path: "/report3d",
  //     },
  //   ],
  // },
  // {
  //   icon: <MonetizationOnIcon sx={{ fontSize: 20 }} />,
  //   text: "MM Withdrawals",
  //   path: "/mmwithdrawals",
  // },
  // {
  //   icon: <MonetizationOnIcon sx={{ fontSize: 20 }} />,
  //   text: "KR Withdrawals",
  //   path: "/krwithdrawals",
  // },
  // {
  //   icon: <PaymentsIcon sx={{ fontSize: 20 }} />,
  //   text: "Payment Accounts",
  //   path: "/paymentaccounts",
  // },
  // {
  //   icon: <ReceiptIcon sx={{ fontSize: 20 }} />,
  //   text: "Bet Lists",
  //   path: "#",
  //   iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
  //   iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

  //   subNav: [
  //     {
  //       text: "2D Bet Lists",
  //       path: "/2dbetlists",
  //     },
  //     {
  //       text: "3D Bet Lists",
  //       path: "/3dbetlists",
  //     },
  //   ],
  // },
  // {
  //   icon: <SettingsIcon sx={{ fontSize: 20 }} />,
  //   text: "System Setting",
  //   path: "#",
  //   iconOpened: <KeyboardArrowUpIcon sx={{ fill: "#686868" }} />,
  //   iconClosed: <KeyboardArrowDownIcon sx={{ fill: "#686868" }} />,

  //   subNav: [
  //     {
  //       text: "2D/3D Setting",
  //       path: "/2d3dsetting",
  //     },
  //     {
  //       text: "Limit Amount",
  //       path: "/limitamount",
  //     },
  //     {
  //       text: "Odds",
  //       path: "/limitcompensate",
  //     },
  //     {
  //       text: "Contact",
  //       path: "/contact",
  //     },
  //   ],
  // },
];
