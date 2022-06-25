import { Grid } from '@mui/material';
import React from 'react'
import { CustomLoading, Nodata } from '../../Components';
import AgentCard from '../../Components/AgentCard/AgentCard';
import Card from '../../Components/Card/Card'
import { CustomGetFunction } from '../../services';
import classes from "./MasterAgent.module.css";
const MasterAgent = () => {
    const { data: agents, loading } = CustomGetFunction('api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=agent', []);
    return (
        <div className={classes["soccer-setting-container"]}>
            <Card>
                <div className={classes["card-header"]}>
                    <h1 className={classes["card-title"]}>Complete Agents</h1>
                </div>
                {
                    loading ? (<div className={classes["card-body"]}>
                        {/* <Grid container spacing={3}>
           {completeMasters.length !==0 && completeMasters.map((completeMaster)=>
           (<MasterCard key={completeMaster?.id} user={completeMaster} path="/account/agent/complete-agent/detail/" />)
           )}
          </Grid> */}
                        {/* <Grid container spacing={5}>
            {
              data.length  !==0 && data.map((master,index)=>(
                <Grid item xs={6} key={index}>
                  <MemberCard partner={master} path={`/dashboard/account/agent/complete-agent/detail/${master.id}`} />
                </Grid>
  ))
            }
          </Grid> */}
                        {
                            agents.length !== 0 ? (<Grid container spacing={4}>
                                {
                                    agents?.length !== 0 && agents?.map((agent, index) => (
                                        <Grid item xs={6} key={index}>
                                            <AgentCard data={agent} route={`/dashboard/account/agent/complete-agent/detail/${agent.id}`} />
                                        </Grid>
                                    ))
                                }
                            </Grid>) : (<Nodata />)
                        }


                    </div>) : (<CustomLoading />)
                }

            </Card>
        </div>
    )
}

export default MasterAgent