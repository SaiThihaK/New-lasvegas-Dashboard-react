import React from 'react'
import Card from '../Card/Card'
import classes from "./PageCard.module.css"
const PageCard = ({title,children,none}) => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        {!none && (<div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>{title}</h1>
        </div>)}

        <div className={classes["card-body"]}>
          {
            children ? children : <div></div>
          }
        </div>
      </Card>
    </div>
  )
}

export default PageCard