import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericButton from "../../component/GenericButton";
import GenericPatientForm from "../../component/GenericPatientForm";
import { sharedGetLocalStorage, sharedSetLocalStorage } from "../../helpers/SharedActions";
import ROUTES from "../../navigations/ROUTES";
import Enums from "../../utils/Enums";
import './AddPatientRecord.css';
import Swal from "sweetalert2";

// LSK:localStorageKeys
const LSK = Enums.globalLocalStorageKeys
const { PATIENT_ROUTES } = ROUTES

const AddPatientRecord = ({ addRecord }) => {
  const navigate = useNavigate()
  let getPatient = sharedGetLocalStorage(LSK.patientRecord)

  const viewPatientRecord = () => {
    if (getPatient === null) {
      alert("No Record Exist")

    } else {
      navigate(PATIENT_ROUTES.ViewScreen.page_path)
    }

  }
  return (
    <>
      <div className="btnContainer" style={{ justifyContent: 'flex-end' }}>
        <GenericButton btnName={"View Patient"}
          btnStyl={{ width: '20%', padding: '10px', borderRadius: '30px solid red', borderWidth: '1px solid red', height: '50px', backgroundColor: 'red', color: 'white' }}
          onClickHandler={() => { viewPatientRecord() }}
        />
      </div>
      <GenericPatientForm
        btnName={'Add Record'}
        onClickHandler={addRecord}
      />
    </>
  )
}
export default AddPatientRecord