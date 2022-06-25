import React from 'react';
import { Link } from "react-router-dom";

import classes from './FootballCard.module.css';
const FootballCard = ({name,bgColor,path,icon}) => {
  return (
    <div className={classes["soccer-card-item"]}>
      <Link to={path}>
      <div style={{backgroundColor: bgColor}} className={classes["item-card"]}>
        <div className={classes['card-icon-flex']}>
          <p className={classes['card-label']}>{name}</p>
         {
           icon
         }
        </div>
      </div>
      </Link>
    </div>
  )
}

export default FootballCard