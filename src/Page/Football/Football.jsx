import React from 'react'
import { FootballCard, PageCard } from '../../Components'
import classes from "./Football.module.css"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DraftsIcon from "@mui/icons-material/Drafts";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
const Football = () => {
  return (
  <PageCard>
     <div className={classes['soccer-setting-content-flex']}>
            <FootballCard name="ဘောလုံးပွဲ" bgColor="#4099FF" path="dashboard/affiliate-agent-percentage" icon={<CalendarMonthIcon/>} />
            <FootballCard name="ကြေးဖွင့်သည့်ပွဲ" bgColor="#FFC107" path="/dashboard/account/user/all-user" icon={<EmojiPeopleIcon  />} />
            <FootballCard name="ကြေးရလဒ်" bgColor="#4099FF" path="/dashboard/account/agent/complete-agent" icon={<DraftsIcon />} />
            <FootballCard name="Bet History" bgColor="#2ED8B6" path="/dashboard/account/master/complete-master" icon={<WorkHistoryIcon />} />
          </div>
  </PageCard>
  )
}

export default Football