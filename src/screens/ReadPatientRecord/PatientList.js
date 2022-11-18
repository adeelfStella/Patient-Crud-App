import React, { useEffect, useState } from "react";
import './PatientList.css'
import { useNavigate } from "react-router-dom";
import GenericButton from "../../component/GenericButton";
import GenericTable from "../../component/GenericTable";
import Enums from "../../utils/Enums";
import ROUTES from "../../navigations/ROUTES";
import { sharedGetLocalStorage } from "../../helpers/SharedActions";

const thData = Enums.patientKeyValueRecord
const { PATIENT_ROUTES } = ROUTES;
const LSK = Enums.globalLocalStorageKeys

const PatientList = ({ patientRecord, onDeleteHandler }) => {

  const navigate = useNavigate()
  const onEditPatientRecord = (editedRecord) => {
    navigate(PATIENT_ROUTES.EditScreen.page_path, { state: { patient: editedRecord } })
  }
  const addNewPatient = () => { navigate(PATIENT_ROUTES.AddScreen.page_path) }
  return (
    <>
      <div className="btnContainer">
        <h3>Patient List</h3>
        <GenericButton
          btnName={"Add New Patient"}
          btnStyl={{ width: '20%', padding: '10px', borderRadius: '30px solid red', borderWidth: '1px solid red', height: '50px', backgroundColor: 'red', color: 'white' }}
          onClickHandler={() => { addNewPatient() }}
        />
      </div>
      <GenericTable
        tdData={patientRecord}
        thData={thData}
        onEdit={(record) => onEditPatientRecord(record)}
        onDelete={onDeleteHandler}
      />
    </>
  )
}
export default PatientList