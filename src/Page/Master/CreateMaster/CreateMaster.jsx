import {
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { PageCard } from '../../../Components';

import { Visibility, VisibilityOff } from '@mui/icons-material';

import { CustomGetFunction } from '../../../services';
import { toast } from 'react-toastify';
import axios from 'axios';
import { PostMethod } from '../../../services/api-services';
// import { borderRadius } from '@mui/system';
// import CreatePath from './CreatePath';
import { useNavigate } from 'react-router-dom';
// import { type } from '../../../services/Token';

const CreateMaster = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [currCode, setCurrCode] = useState("");
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [gameCat, setGameCat] = useState([]);
  // const [gameOdd, setGameOdd] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [city, setCity] = useState([]);
  // const { data: currency } = CustomGetFunction(`api/currencies`, [])
  const { data: games } = CustomGetFunction('api/game', []);
  const { data: countryData } = CustomGetFunction(
    'api/available-regions?sortColumn=country_name&sortDirection=asc&limit=100',
    []
  );
  const [game, setGame] = useState([]);

  // const [cardArr, serCardArr] = useState([
  //   {
  //     "game_id": 1,
  //     "sale_percent": 5,
  //     "time": 88
  //   },
  //   {
  //     "game_id": 1,
  //     "sale_percent": 4,
  //     "time": 90
  //   }
  // ]);
  // const [scale, setScale] = useState("");
  // const [time, setTime] = useState("");
  console.log('gameOdd', game);

  const useStyles = makeStyles(() => {
    return {
      formControl: {
        display: 'flex',
        marginBottom: 10,
      },
      label: {
        width: 150,
      },
      currency: {
        backgroundColor: '#eee',
        borderRadius: '5px',
        width: '700px !important',
        height: '40px',
        padding: '5px',
      },
    };
  });
  const classes = useStyles();

  const createMaster = async (e) => {
    e.preventDefault();
    const arrOfObj1 = Object.values(game);

    console.log('password', password);
    console.log('confirmPassword', confirmPassword);
    // const agentId = localStorage.getItem('id');

    try {
      const response = await axios.request(
        PostMethod(`api/vegas/create-agent/`, {
          agent_level: 'master',
          name,
          email,
          password,
          password_confirmation: confirmPassword,
          phone,
          master_id: '2',
          country,
          currency_code: currency,
          city,
          agent_games: arrOfObj1,
        })
      );
      if (response.data.status === 'error') {
        toast.error(response.data.error);
        return;
      }
      if (response.data.status === 'success') {
        toast.success(response.data.message);
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    countryData.forEach((element) => {
      if (element.country_code === e.target.value) {
        setCountry(element.country_code);
        setCurrency(element.currency_code);
        return;
      }
    });
  };
  return (
    // <Item>
    <PageCard>
      <div style={{ padding: '0px 40px' }}>
        <Typography id='modal-modal-description' sx={{ mt: 2 }} component='div'>
          <div className={classes.formControl}>
            <label className={classes.label}>အမည်</label>
            <TextField
              sx={{ width: '700px' }}
              // id="outlined-search"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              size='small'
            />
          </div>

          <div className={classes.formControl}>
            <label className={classes.label}>အီးမေးလ်</label>
            <TextField
              sx={{ width: '700px' }}
              // id="outlined-search"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              size='small'
            />
          </div>
          <div className={classes.formControl}>
            <label className={classes.label}>ဖုန်း</label>
            <TextField
              sx={{ width: '700px' }}
              // id="outlined-search"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type='text'
              size='small'
            />
          </div>

          <div className={classes.formControl}>
            <label className={classes.label}>စကားဝှက်</label>
            <OutlinedInput
              sx={{ width: '700px' }}
              // id="outlined-search"
              type={showPassword ? 'text' : 'password'}
              value={password}
              size='small'
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(!showPassword)}
                    //   onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>

          <div className={classes.formControl}>
            <label className={classes.label}> အတည်ပြုစကားဝှက်</label>
            <OutlinedInput
              sx={{ width: '700px' }}
              // id="outlined-search"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              size='small'
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(!showPassword)}
                    //   onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className={classes.formControl}>
            <label className={classes.label}>နိုင်ငံ</label>
            <Select
              sx={{ width: '700px' }}
              // id="outlined-search"
              type='text'
              size='small'
              value={country}
              onChange={handleChange}
            >
              {countryData.map((curr, index) => (
                <MenuItem value={curr.country_code} key={index}>
                  {curr?.country_name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={classes.formControl}>
            <label className={classes.label}>ငွေကြေး</label>
            <div className={classes.currency}>{currency}</div>
          </div>
          <div className={classes.formControl}>
            <label className={classes.label}>မြို့</label>
            <TextField
              sx={{ width: '700px' }}
              // id="outlined-search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type='text'
              size='small'
            />
          </div>
          {/* ============================Games============================================== */}
          <div className={classes['formControl']}>
            <label className={classes['label']}>ဂိမ်းများ</label>
            {games.map((game, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={game.name}
                onChange={(e) => {
                  // add to list
                  if (e.target.checked) {
                    setGameCat([...gameCat, game]);
                  } else {
                    // remove from list
                    setGame((pre) => {
                      delete pre[game.id];
                      return pre;
                    });
                    setGameCat(gameCat.filter((gm) => gm.id !== game.id));
                  }
                }}
                value={gameCat}
              />
            ))}
          </div>
          {/* ============================Games============================================== */}
          <div className={classes['formControl']}>
            <label className={classes['label']}>ဂိမ်းများ</label>
            {games.map((game, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={game.name}
                onChange={(e) => {
                  // add to list
                  if (e.target.checked) {
                    setGameCat([...gameCat, game]);
                  } else {
                    // remove from list
                    setGameCat(gameCat.filter((gm) => gm.id !== game.id));
                  }
                }}
                value={gameCat}
              />
            ))}
          </div>
          {/* ============================Games============================================== */}

          {/* <div className={classes.formControl}>

            <label className={classes.label}>ဘောလုံး</label>
            <TextField
              sx={{ width: "340px" }}
              // id="outlined-search"
              label="ဘောလုံး"
              type="text"
              size="small"
            />

          </div>
          {
            gameCat?.map((game, index) => (
              <div className={classes.formControl} key={index}>
                <label className={classes.label}>{game.name}</label>
                <CreatePath setGame={setGame} id={game.id} />
              </div>
            ))
          }
          {/* <div className={classes.formControl}>

            <label className={classes.label}>ချဲ</label>
              <Grid container spacing={0} sx={{width:700}}>
                <Grid item xs={6}>
                <TextField
              sx={{ width: "340px" }}
      
              label="%"
              type="text"
              size="small"
            />
            
                </Grid>
                <Grid item xs={6}>
                <TextField
              sx={{ width: "340px" }}
              style={{marginLeft:10}}
              // id="outlined-search"
              type="text"
              size="small"
              label="အလျော်(ဇ)"
            />
                </Grid>
              </Grid>
            </div>
            <div className={classes.formControl}>
            <label className={classes.label}>နစ်လုံးထီ</label>
              <Grid container spacing={0} sx={{width:700}}>
                <Grid item xs={6}>
                <TextField
              sx={{ width: "340px" }}
              // id="outlined-search"
              label="%"
              type="text"
              size="small"
            />
            
                </Grid>
                <Grid item xs={6}>
                <TextField
              sx={{ width: "340px" }}
              style={{marginLeft:10}}
              // id="outlined-search"
              type="text"
              size="small"
              label="အလျော်(ဇ)"
            />
                </Grid>
              </Grid>
            </div>
          
            <div className={classes.formControl}>
            <label className={classes.label}>စင်ကာပူထီ</label>
              <Grid container spacing={0} sx={{width:700}}>
                <Grid item xs={6}>
                <TextField
              sx={{ width: "340px" }}
              // id="outlined-search"
              label="%"
              type="text"
              size="small"
            />
            
                </Grid>
                <Grid item xs={6}>
                <TextField
              sx={{ width: "340px" }}
              style={{marginLeft:10}}
              // id="outlined-search"
              type="text"
              size="small"
              label="အလျော်(ဇ)"
            />
                </Grid>
              </Grid>
            </div> */}

          <Button
            sx={{
              marginTop: 3,
              boxShadow: 'none !important',
              marginBottom: 20,
            }}
            variant='contained'
            onClick={createMaster}
          >
            ဖွင့်မည်
          </Button>
        </Typography>
      </div>
    </PageCard>
    // </Item>
  );
};

export default CreateMaster;
