import React from 'react'
import { FinancialReportTable, LotteryOpening, PageCard, SummCard, TwoDigitTable, TwoDThreeD } from '../../Components'

import classes from "./Summary.module.css"
const Summary = () => {
  return (
    <div>
  <PageCard title="အကျဥ်းချူပ်">
   <SummCard />
  </PageCard>
  <PageCard title="FinancialReport Table">
  <FinancialReportTable />
  </PageCard>
  <PageCard title="Lottery Opening and Close">
  <LotteryOpening />
  </PageCard>
  <PageCard>
    <TwoDigitTable />
  </PageCard>
  <PageCard>
    <TwoDThreeD />
  </PageCard>
    </div>

  )
}

export default Summary