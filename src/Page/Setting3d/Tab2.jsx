import { Stack, TextField } from '@mui/material';
import React from 'react';
import { DatePicker, Switchbutton, TimeZonePicker } from '../../Components';

const Tab2 = () => {
  const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const dateHandler = (newValue) => {
    setDate(newValue);
  };

  const [time, setTime] = React.useState(new Date('2014-08-18T21:11:54'));

  const timeHandler = (newValue) => {
    setTime(newValue);
  };

  // Close Time
  const [closeDate, setCloseDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );
  const closeDateHandler = (newValue) => {
    setCloseDate(newValue);
  };

  const [closeTime] = React.useState(new Date('2014-08-18T21:11:54'));

  const closeTimeHandler = (newValue) => {
    setTime(newValue);
  };

  return (
    <div>
      <Stack style={stackStyle} spacing={2} direction='row'>
        <label style={{ width: 200, marginTop: 10 }}>ပွင့်ချိန်</label>
        <DatePicker value={date} handleChange={dateHandler} />
        <TimeZonePicker value={time} handleChange={timeHandler} />
      </Stack>
      <Stack style={stackStyle} spacing={2} direction='row'>
        <label style={{ width: 200, marginTop: 10 }}>ပိတ်ချိန်</label>
        <DatePicker value={closeDate} handleChange={closeDateHandler} />
        <TimeZonePicker value={closeTime} handleChange={closeTimeHandler} />
      </Stack>
      <Stack style={stackStyle} direction='row' spacing={2}>
        <label style={{ width: 200, marginTop: 10 }}>မတ်ချက်</label>
        <p>
          တစ်လတစ်ကြိမ်ပြင်ဆင်ပေးရန်။မပြင်ပါကထိုးသားမထိုးလို့ရတော့မည်မဟုတ်ပါ။
        </p>
      </Stack>
      <Stack style={stackStyle} direction='row' spacing={2}>
        <label style={{ width: 200, marginTop: 10 }}>လက်ခံမည့်ပမာဏ</label>
        <TextField label='ယူနစ်' />
      </Stack>
      <Stack style={stackStyle} direction='row' spacing={2}>
        <label style={{ width: 200, marginTop: 10 }}>တစ်ရက်နေ့ပိတ်</label>
        <Switchbutton />
      </Stack>
      <Stack style={stackStyle} direction='row' spacing={2}>
        <label style={{ width: 200, marginTop: 10 }}>အကုန်ပိတ်</label>
        <Switchbutton />
      </Stack>
      <StackComponent label='သီးသန့်ပိတ်ဂဏန်း'>
        <p>
          မတ်ချက် ။ သီးသန့်ပိတ်ဂဏန်းသည်တစ်ကြိမ်သာအကျူံး၀င်သည် ဥပမာ
          မနက်ပိုင်းပိတ်ထားသည့်ဂဏန်းသည်ညနေအတွက်အကြုံးမ၀င်ပါ
        </p>
      </StackComponent>
      <StackComponent label='ထိပ်စီးများ'>
        <p>
          မတ်ချက် ။ ထိပ်စီးသတ်မတ်ပါကပတ်လည်ထိုးမရမည်ဖြစ်မည် ။
          သူသည်လည်းတစ်ပတ်လျင်တစ်ကြိမ်သာအကြုံး၀င်မည်ဖြစ်မည် ။
        </p>
      </StackComponent>
    </div>
  );
};

export default Tab2;

const stackStyle = {
  windth: '100%',
  marginBottom: 20,
};

const StackComponent = ({ children, label }) => {
  const stackStyle = {
    windth: '100%',
    marginBottom: 20,
  };
  return (
    <Stack style={stackStyle} direction='row' spacing={2}>
      <label style={{ width: 200, marginTop: 10 }}>{label}</label>
      {children}
    </Stack>
  );
};
