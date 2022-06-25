import React from 'react'
import { NormalTable, PageCard } from '../../Components'

const Topup = () => {
  const data = [];
  return (
    <PageCard>
        <NormalTable columns={columns} data={data}>

        </NormalTable>
    </PageCard>
  )
}

export default Topup

const columns = ['No','User ID','Payment Provider','Amount','Phone','Transacation','Status','Payment Date']