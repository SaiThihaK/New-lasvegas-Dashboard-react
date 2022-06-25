import { Typography,Box } from '@mui/material'

import React from 'react'
import Table2d3dDetail from './Table2d3dDetail'

const TwoDThreeD = () => {
  return (
    <div>
        <Typography style={{backgroundColor:"var(--main-color)",color:"white",padding:10,}} component="div">2D 3D</Typography>
        <Box
        sx={{
          padding: 3,
          background: "#fff",
          border:'1px solid #e0e0ef',
          borderBottomLeftRadius:7,
          borderBottomRightRadius:7,
        }}
      >
      <Box sx={{display:'flex',flexWrap:'wrap',marginBottom:3}}>
        <Box sx={{ border:'1px solid #e0e0ef',marginLeft:2,borderRadius:10,padding:'8px 38px',color:'#000',cursor:'pointer'}}>
          <Typography sx={{fontSize:13}}>12:01</Typography>
        </Box>
        <Box sx={{ border:'1px solid #e0e0ef',marginLeft:2,borderRadius:10,padding:'8px 38px',color:'#000',cursor:'pointer'}}>
          <Typography sx={{fontSize:13}}>04:30</Typography>
        </Box>
        <Box sx={{ border:'1px solid #e0e0ef',marginLeft:2,borderRadius:10,padding:'8px 38px',color:'#000',cursor:'pointer'}}>
          <Typography sx={{fontSize:13}}>၁၆ ရက်</Typography>
        </Box>
        <Box sx={{ border:'1px solid #e0e0ef',marginLeft:2,borderRadius:10,padding:'8px 38px',color:'#000',cursor:'pointer'}}>
          <Typography sx={{fontSize:13}}>၁ ရက်</Typography>
        </Box>
      </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            borderLeft: "1px solid #e0e0ef",
            borderTop: "1px solid #e0e0ef",
          }}
        >
          {Table2d3dData?.map((item, index) => (
            <Table2d3dDetail item={item} key={index} />
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <Typography sx={{ fontSize: "25px", color: "#000" }}>
            Total :
          </Typography>
          <Typography sx={{ fontSize: "25px", color: "#000", marginLeft: 1 }}>
            4359050 MMK
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default TwoDThreeD
 const Table2d3dData = [
    {
        number: '01',
        amount: 'Ks 52000',
    },
    {
        number: '02',
        amount: 'Ks 52000',
    },
    {
        number: '03',
        amount: 'Ks 52000',
    },
    {
        number: '04',
        amount: 'Ks 52000',
    },
    {
        number: '05',
        amount: 'Ks 52000',
    },
    {
        number: '06',
        amount: 'Ks 52000',
    },
    {
        number: '07',
        amount: 'Ks 52000',
    },
    {
        number: '08',
        amount: 'Ks 52000',
    },
    {
        number: '09',
        amount: 'Ks 52000',
    },
    {
        number: '10',
        amount: 'Ks 52000',
    },
    {
        number: '11',
        amount: 'Ks 52000',
    },
    {
        number: '12',
        amount: 'Ks 52000',
    },
    {
        number: '13',
        amount: 'Ks 52000',
    },
    {
        number: '14',
        amount: 'Ks 52000',
    },
    {
        number: '15',
        amount: 'Ks 52000',
    },
    {
        number: '16',
        amount: 'Ks 52000',
    },
    {
        number: '17',
        amount: 'Ks 52000',
    },
    {
        number: '18',
        amount: 'Ks 52000',
    },
    {
        number: '19',
        amount: 'Ks 52000',
    },
    {
        number: '20',
        amount: 'Ks 52000',
    },
    {
        number: '21',
        amount: 'Ks 52000',
    },
    {
        number: '22',
        amount: 'Ks 52000',
    },
    {
        number: '23',
        amount: 'Ks 52000',
    },
    {
        number: '24',
        amount: 'Ks 52000',
    },
    {
        number: '25',
        amount: 'Ks 52000',
    },
    {
        number: '26',
        amount: 'Ks 52000',
    },
    {
        number: '27',
        amount: 'Ks 52000',
    },
    {
        number: '28',
        amount: 'Ks 52000',
    },
    {
        number: '29',
        amount: 'Ks 52000',
    },
    {
        number: '30',
        amount: 'Ks 52000',
    },
    {
        number: '31',
        amount: 'Ks 52000',
    },
    {
        number: '32',
        amount: 'Ks 52000',
    },
    {
        number: '33',
        amount: 'Ks 52000',
    },
    {
        number: '34',
        amount: 'Ks 52000',
    },
    {
        number: '35',
        amount: 'Ks 52000',
    },
    {
        number: '36',
        amount: 'Ks 52000',
    },
    {
        number: '37',
        amount: 'Ks 52000',
    },
    {
        number: '38',
        amount: 'Ks 52000',
    },
    {
        number: '39',
        amount: 'Ks 52000',
    },
    {
        number: '40',
        amount: 'Ks 52000',
    },
    {
        number: '41',
        amount: 'Ks 52000',
    },
    {
        number: '42',
        amount: 'Ks 52000',
    },
    {
        number: '43',
        amount: 'Ks 52000',
    },
    {
        number: '44',
        amount: 'Ks 52000',
    },
    {
        number: '45',
        amount: 'Ks 52000',
    },
    {
        number: '46',
        amount: 'Ks 52000',
    },
    {
        number: '47',
        amount: 'Ks 52000',
    },
    {
        number: '48',
        amount: 'Ks 52000',
    },
    {
        number: '49',
        amount: 'Ks 52000',
    },
    {
        number: '50',
        amount: 'Ks 52000',
    },
    {
        number: '51',
        amount: 'Ks 52000',
    },
    {
        number: '52',
        amount: 'Ks 52000',
    },
    {
        number: '53',
        amount: 'Ks 52000',
    },
    {
        number: '54',
        amount: 'Ks 52000',
    },
    {
        number: '55',
        amount: 'Ks 52000',
    },
    {
        number: '56',
        amount: 'Ks 52000',
    },
    {
        number: '57',
        amount: 'Ks 52000',
    },
    {
        number: '58',
        amount: 'Ks 52000',
    },
    {
        number: '59',
        amount: 'Ks 52000',
    },
    {
        number: '60',
        amount: 'Ks 52000',
    },
    {
        number: '61',
        amount: 'Ks 52000',
    },
    {
        number: '62',
        amount: 'Ks 52000',
    },
    {
        number: '63',
        amount: 'Ks 52000',
    },
    {
        number: '64',
        amount: 'Ks 52000',
    },
    {
        number: '65',
        amount: 'Ks 52000',
    },
    {
        number: '66',
        amount: 'Ks 52000',
    },
    {
        number: '67',
        amount: 'Ks 52000',
    },
    {
        number: '68',
        amount: 'Ks 52000',
    },
    {
        number: '69',
        amount: 'Ks 52000',
    },
    {
        number: '70',
        amount: 'Ks 52000',
    },
    {
        number: '71',
        amount: 'Ks 52000',
    },
    {
        number: '72',
        amount: 'Ks 52000',
    },
    {
        number: '73',
        amount: 'Ks 52000',
    },
    {
        number: '74',
        amount: 'Ks 52000',
    },
    {
        number: '75',
        amount: 'Ks 52000',
    },
    {
        number: '76',
        amount: 'Ks 52000',
    },
    {
        number: '77',
        amount: 'Ks 52000',
    },
    {
        number: '78',
        amount: 'Ks 52000',
    },
    {
        number: '79',
        amount: 'Ks 52000',
    },
    {
        number: '80',
        amount: 'Ks 52000',
    },
    {
        number: '81',
        amount: 'Ks 52000',
    },
    {
        number: '82',
        amount: 'Ks 52000',
    },
    {
        number: '83',
        amount: 'Ks 52000',
    },
    {
        number: '84',
        amount: 'Ks 52000',
    },
    {
        number: '85',
        amount: 'Ks 52000',
    },
    {
        number: '86',
        amount: 'Ks 52000',
    },
    {
        number: '87',
        amount: 'Ks 52000',
    },
    {
        number: '88',
        amount: 'Ks 52000',
    },
    {
        number: '89',
        amount: 'Ks 52000',
    },
    {
        number: '90',
        amount: 'Ks 52000',
    },
    {
        number: '91',
        amount: 'Ks 52000',
    },
    {
        number: '92',
        amount: 'Ks 52000',
    },
    {
        number: '93',
        amount: 'Ks 52000',
    },
    {
        number: '94',
        amount: 'Ks 52000',
    },
    {
        number: '95',
        amount: 'Ks 52000',
    },
    {
        number: '96',
        amount: 'Ks 52000',
    },
    {
        number: '97',
        amount: 'Ks 52000',
    },
    {
        number: '98',
        amount: 'Ks 52000',
    },
    {
        number: '99',
        amount: 'Ks 52000',
    },
]
