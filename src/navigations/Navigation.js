import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import { sharedGetLocalStorage, sharedSetLocalStorage } from "../helpers/SharedActions";
import AddPatientRecord from "../screens/AddPatientRecord/AddPatientRecord";
import EditPatientRecord from "../screens/EditPatientRecord/EditPatientRecord.js";
import PatientList from "../screens/ReadPatientRecord/PatientList";
import Enums from "../utils/Enums";
import ROUTES from "./ROUTES";
// sp:SelectedPatient
const { PATIENT_ROUTES } = ROUTES;
const LSK = Enums.globalLocalStorageKeys

const RootNavigation = ({ onEditRecord }) => {
    const navigate = useNavigate()
    const [patient, setPatient] = useState([])
    const [run, setrun] = useState(false)
  
    // Fetching from Local Storage
    let getPatient = sharedGetLocalStorage(LSK.patientRecord)

    useEffect(() => {
      console.log("app js useEfect");
      if (getPatient === null) {
        // setPatient([])
        // navigate(PATIENT_ROUTES.AddScreen.page_path)
      } else {
        setPatient(getPatient);
        navigate(PATIENT_ROUTES.ViewScreen.page_path)
      }
  
    }, [])
    useEffect(() => {
      if (getPatient === null) {
        navigate(PATIENT_ROUTES.AddScreen.page_path)
        setPatient([])
        setrun(false)
      }
  
    }, [run])
  
    const savePatientRecord = (record) => {
      // const patientId = sharedGenerateCustomId();
      // const newPatient = { patientId, ...record }
      const newPatient = record
      setPatient([...patient, newPatient]);
      sharedSetLocalStorage(LSK.patientRecord, [...patient, newPatient])
      Swal.fire({
        icon: 'success',
        title: 'Congrats',
        text: 'Record Added SuccessFully!'
      })
      navigate(PATIENT_ROUTES.ViewScreen.page_path)
    }
    const editPatientRecord = (editedRecord) => {
      const updatedPatient = getPatient.map(value => {
        if (value.patientId === editedRecord.patientId) { return { ...editedRecord } }
        return value;
      })
      setPatient(updatedPatient)
      sharedSetLocalStorage(LSK.patientRecord, updatedPatient)
      Swal.fire({
        icon: 'succcess',
        title: 'Oops...',
        text: 'You have successfully Edit Your Record!'
      })
      navigate(PATIENT_ROUTES.ViewScreen.page_path)
    }
    const deletePatientRecord = (deletedRecord) => {
      const updatedPatient = getPatient.filter((value) => value.patientId !== deletedRecord.patientId)
      if (updatedPatient.length === 0) {
        localStorage.removeItem(LSK.patientRecord);
        setrun(true)
        setPatient(updatedPatient);
      } else {
        sharedSetLocalStorage(LSK.patientRecord, updatedPatient)
        setPatient(updatedPatient);
        Swal.fire({
          icon: 'success',
          title: 'Oops...',
          text: 'You have successfully Delete Your Record!'
        })
      }
    }

  return (
    <>
    <Routes>
        <Route path={PATIENT_ROUTES.AddScreen.page_path}
          element={<AddPatientRecord
            addRecord={savePatientRecord}
          />} />
        <Route path={PATIENT_ROUTES.ViewScreen.page_path}
          element={<PatientList
            patientRecord={patient}
            onDeleteHandler={deletePatientRecord}
          />} />
        <Route path={PATIENT_ROUTES.EditScreen.page_path}
          element={<EditPatientRecord
            onEditRecord={editPatientRecord}
          />} />
      </Routes>
    </>
  )
}
export default RootNavigation