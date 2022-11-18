import React from "react";
import { useLocation } from "react-router-dom";
import GenericPatientForm from "../../component/GenericPatientForm";
import Enums from "../../utils/Enums";
// sp:SelectedPatient

const EditPatientRecord = ({ onEditRecord }) => {
  let { state } = useLocation();
  const SP = state.patient

  return (
    <>
      <GenericPatientForm
        patientId={SP.patientId}
        patientName={SP.patientName}
        patientEmail={SP.patientEmail}
        patientDOB={SP.patientDOB}
        patientEmployer={SP.patientEmployer}
        patientMobNumber={SP.patientMobNumber}
        patientAddres={SP.patientAddres}
        btnName={'Edit Record'}
        onClickHandler={onEditRecord}
      />
    </>
  )
}
export default EditPatientRecord