import React from 'react';
import { Box, Typography } from '@mui/material';

// import { makeStyles } from '@mui/styles';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

// const useStyles = makeStyles({
//   hover: {
//     '&:hover': {
//       transform: 'scale(1.1)',
//       transition: 'all .5s ease-out',
//     },
//   },
//   hovertwo: {
//     transition: 'all .5s ease-out',
//   },
// });

const SummCard = () => {
  // const classes = useStyles();
  const DateBox = [
    {
      data: [
        {
          name: 'လူစာရင်းစုစုပေါင်း',
          total: '၁၀၀ယောက်',
        },
        {
          name: 'ထိုးသား',
          total: '၁၀၀ယောက်',
        },
        {
          name: 'ကော်မရှင်',
          total: '၁၀၀ယောက်',
        },
        {
          name: 'ဂုတ်စီး',
          total: '၁၀၀ယောက်',
        },
      ],
    },
    {
      data: [
        {
          name: 'ယူနစ်လည်ပတ်မစုစုပေါင်း',
          total: '၁၀၀ယောက်',
        },
        {
          name: 'လက်ကျန်',
          total: '၁၀၀၀ယူနစ်',
        },
        {
          name: 'ထိုးသားယူနစ်',
          total: '၁၀၀၀ယူနစ်',
        },
        {
          name: 'ဂုတ်စီးကော်မရှင်ယူနစ်',
          total: '၁၀၀၀ယူနစ်',
        },
      ],
    },
    {
      data: [
        {
          name: 'ငွေသွင်းစုစုပေါင်း',
          total: '၁၀၀၀ကျပ်',
        },
        {
          name: 'ငွေထုတ်စုစုပေါင်း',
          total: '၁၀၀၀ကျပ်',
        },
        {
          name: 'ခြားနားချက်',
          total: '၁၀၀၀ ကျပ်',
        },
      ],
    },
    {
      data: [
        {
          name: 'နစ်လုံးထီအလျော်',
        },
        {
          name: 'ချဲ',
        },
        {
          name: 'ဘောလုံး',
        },
        {
          name: 'ထီ',
        },
      ],
    },
  ];
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '25px' }}>
        {DateBox.map((data, key) => (
          <div
            key={key}
            style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '25px' }}
          >
            {data.data.map((data, key) => (
              <Link to='#' key={key}>
                <Box
                  sx={{
                    background: 'linear-gradient(1deg, #5FC0DA, #004a99)',
                    //   background: "#FFC107",
                    width: '180px',
                    marginBottom: 2,
                    marginRight: 2,
                    borderRadius: 2,
                    padding: '10px 10px',
                    boxShadow:
                      '0 0 5px 0 rgb(43 43 43 / 10%), 0 11px 6px -7px rgb(43 43 43 / 10%)',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px 0px',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 14,
                      }}
                    >
                      {data.name}
                    </Typography>
                    <PeopleIcon
                      sx={{
                        color: '#fff',
                        // width: "50px",
                        fontSize: 30,
                        alignItems: 'center',
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: '#fff',
                      background: '#555555',
                      borderRadius: 1,
                      fontSize: 14,
                      padding: '5px 10px',
                    }}
                  >
                    {data.total}
                  </Typography>
                </Box>
              </Link>
            ))}
          </div>
        ))}
      </Box>
    </>
  );
};

export default SummCard;
