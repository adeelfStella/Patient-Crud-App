import React, { useState } from "react";
import Enums from "../utils/Enums";
import { FaPencilAlt, FaTimes, FaAndroid } from 'react-icons/fa';
import { initColors } from "../res/colors";

// some fullForm who's shortForm used below
// thData:tableheaderData
//tdData :tabbleData

// const thData = Enums.patientKeyValueRecord
const actionIconSize = 20  // iconsize for edit & delete btn
//  thData & tdData i.e props required thData => tblheadings data tdData => tbltdData
const GenericTable = ({ thData, tdData, onEdit, onDelete }) => {

    // function which return dynamic Ui of tble heading 
    const renderTbheaderUi = (data) => { return (data.map((x, i) => { return (<th>{x.title}</th>) })) }

    // function which return dynamic Ui of tble body data 
    const renderTdUi = (data) => {
        return (
            data.map((value, index) => {
                return (
                    <tr>
                        <td>{value.patientId}</td>
                        <td>{value.patientName}</td>
                        <td>{value.patientEmail}</td>
                        <td>{value.patientDOB}</td>
                        <td>{value.patientEmployer}</td>
                        <td>{value.patientMobNumber}</td>
                        <td >{value.patientAddres}</td>
                        <div style={style.iconContainer}>
                            <FaPencilAlt color={initColors.blue} size={actionIconSize} onClick={()=>onEdit(value)} />
                            <FaTimes color={initColors.red} size={actionIconSize} onClick={()=>onDelete(value)} />
                        </div>
                    </tr>
                )
            })
        )
    }

    return (
        <>
            <table>
                <tr> {renderTbheaderUi(thData)} </tr>
                {renderTdUi(tdData)}
            </table>
        </>
    )
}
export default GenericTable
const style = {
    iconContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: "center",
        alignContent: 'center',
        alignSelf: 'center',
        padding: '7px',
        // border:'0.5px solid black'
        borderBottom:'1px solid black'
        

    }
}