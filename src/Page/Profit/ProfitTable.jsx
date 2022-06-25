import React from "react";



import classes from "./ProfitTable.module.css";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { CustomLoading, Nodata } from "../../Components";
import Card from "../../Components/Card/Card";
const agentProfitTitle = [
    "Date", "User Name", "Time", "Transition ID", "Amount", "Type", "Payment Data"
]
const MasterProfitTitile = [
    "Date", "Type", "Amount", "Agent Name", "Note"
]
const columns = [
    {
        field: "id",
        headerName: 'ID',
        width: 90,
        headerAlign: 'left',
        editable: false,
    },
    {
        field: "date",
        headerName: 'Date',
        width: 200,
        headerAlign: 'left',
        editable: false,
        valueGetter: (params) => params.row.readable_date,
        renderCell: (params) => ChangeDate(params.row.created_at)
    },
    {
        field: "type",
        headerName: 'Type',
        width: 150,
        headerAlign: 'left',
        editable: false,
        valueGetter: (params) => params.row.type,
        // renderCell:(params)=> { return(  <Box sx={{backgroundColor: params.row.type ==="withdraw" ? "red" : "rgb(251,177,23)" ,color : "white",borderRadius: "7px",padding: "6px 5px",}}> {params.row.type}</Box>  ) }

    },
    {
        field: "amount",
        headerName: 'Amount',
        width: 100,
        headerAlign: 'left',
        editable: false,
        valueGetter: (params) => params.row.amount
    },
    {
        field: "from",
        headerName: 'From',
        width: 150,
        headerAlign: 'left',
        editable: false,
        valueGetter: (params) => params.row.sender_user.name
    },
    {
        field: "note",
        headerName: 'Note',
        width: 300,
        headerAlign: 'left',
        editable: false,
        valueGetter: (params) => params.row.note
    },
]
const ProfitTable = ({ type, data, loading }) => {
    let TotalAmount = 0;
    let TotalPen = 0;
    let TotalAgentPen = 0;
    let TotalProfit = 0
    const addAmount = (el) => {
        TotalAmount = TotalAmount + el;
        return el
    }
    const addPercentage = (el) => {
        TotalPen = TotalPen + el;
        return el
    }
    const addAgentPercentage = (el) => {
        TotalAgentPen = TotalAgentPen + el;
        return el
    }
    const addProfit = (el) => {
        TotalProfit = TotalProfit + el;
        return el;
    }

    return (
        <>
            <Card>


                {
                    loading ? (<div className={classes["table-margin"]}>
                        {

                            data.length !== 0 ? (<DataGrid columns={columns} rows={data} components={{ Toolbar: GridToolbar }} hideFooter />) : (<Nodata />)
                        }

                    </div>) : (<CustomLoading />)
                }
            </Card>


        </>)

}

export default ProfitTable


