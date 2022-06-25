import { Box, Button, Modal, TextField } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #FFF',
  borderRadius: '0.5rem',
  p: 4,
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 100px)',
};
const Result2dModal = ({
  open,
  handleClose,
  label,

  value,
  setValue,
  submitHandler,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <TextField
            sx={{ width: '100%' }}
            id='outlined-search'
            label={label}
            type='number'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {/* <FormControl sx={{ width: "100%", marginTop: 3 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Lottery Time
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                label="Lottery Time"
                // onChange={handleChange}
              >
                <MenuItem value={10}>12:01</MenuItem>
                <MenuItem value={20}>4:30</MenuItem>
              </Select>
            </FormControl> */}

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItem: 'center',
              marginTop: 10,
            }}
          >
            <Button variant='contained' size='small' onClick={submitHandler}>
              ဖန်တီးရန်
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Result2dModal;
