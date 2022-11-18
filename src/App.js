import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddPatientRecord from './screens/AddPatientRecord/AddPatientRecord';
import { sharedGenerateCustomId, sharedGetLocalStorage, sharedSetLocalStorage } from "../src/helpers/SharedActions";
import Enums from './utils/Enums';
import PatientList from './screens/ReadPatientRecord/PatientList';
import EditPatientRecord from './screens/EditPatientRecord/EditPatientRecord.js';
import Swal from "sweetalert2";
import ROUTES from './navigations/ROUTES';
import RootNavigation from './navigations/Navigation';

function App() {
  

  return (
    <div className='App' >
      <RootNavigation />
      {/* <Routes>
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
      </Routes> */}
    </div>
  );
}

export default App;
