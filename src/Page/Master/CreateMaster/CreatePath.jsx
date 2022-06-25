import { Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CreatePath = ({ setGame, id }) => {
    const [sale, setSale] = useState("");
    const [time, setTime] = useState("");
    useEffect(() => {


        setGame(prevCount => {
            return {
                ...prevCount,
                [id]: {
                    "game_id": id,
                    "sale_percent": sale,
                    "time": time,

                }
            }
        })

    }, [sale, time])
    return (
        <div>  <Grid container spacing={0} sx={{ width: 700 }}>
            <Grid item xs={6}>
                <TextField
                    sx={{ width: "340px" }}
                    label="%"
                    type="text"
                    size="small"
                    onChange={(e) => {
                        setSale(e.target.value);
                    }}
                />

            </Grid>
            <Grid item xs={6}>
                <TextField
                    sx={{ width: "340px" }}
                    style={{ marginLeft: 10 }}
                    // id="outlined-search"
                    type="text"
                    size="small"
                    label="အလျော်(ဇ)"
                    onChange={(e) => setTime(e.target.value)}
                />
            </Grid>
        </Grid></div>
    )
}

export default CreatePath