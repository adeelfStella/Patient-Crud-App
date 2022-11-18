import React, { useState } from "react";
import { sharedGenerateCustomId } from "../helpers/SharedActions";
import Enums from "../utils/Enums";
import GenericButton from "./GenericButton";

// some fullForm who's shortForm used below
// PC:patientConstarints
// InputTypes:IP
const formData = Enums.patientKeyValueRecord

const GenericPatientForm = (props) => {
  let initialState = {
    values: {
      patientId: props.patientId ?? sharedGenerateCustomId(),
      patientName: props.patientName ?? '',
      patientEmail: props.patientEmail ?? '',
      patientDOB: props.patientDOB ?? '',
      patientEmployer: props.patientEmployer ?? '',
      patientMobNumber: props.patientMobNumber ?? '',
      patientAddres: props.patientAddres ?? '',
    },
    errors: {
      patientName: '',
      patientEmail: '',
      patientDOB: '',
      patientEmployer: '',
      patientMobNumber: '',
      patientAddres: '',
    },
    forceError: false
  };
  const [state, setState] = useState(initialState)
  const checkDobValidity = (selectedDob) => {
    var now = new Date();
    const currentDate = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + (now.getDate());
    if (selectedDob > currentDate) return false
    else { return true }
  }
  // input onChange handling plus all validations are check here, it requi
  const onChangeHandlder = (key, value, pattern, msg) => {
    const regexp = new RegExp(pattern)
    const isValid = regexp.test(value)
    console.log("regex", regexp.test(value));
    if (key === "patientDOB" && !checkDobValidity(value)) {
      setState((pre) => ({
        ...pre,
        values: { ...pre.values, [key]: value },
        errors: { ...pre.errors, [key]: msg }
      }))
    } else if (key === "patientDOB" && checkDobValidity(value)) {
      setState((pre) => ({
        ...pre,
        values: { ...pre.values, [key]: value },
        errors: { ...pre.errors, [key]: '' }
      }))
    }
    else if (isValid || value === '') {
      setState((pre) => ({
        ...pre,
        values: { ...pre.values, [key]: value },
        errors: { ...pre.errors, [key]: '' },
        forceError: false
      }))
    }
    else {
      setState((pre) => ({
        ...pre,
        values: { ...pre.values, [key]: value },
        errors: { ...pre.errors, [key]: msg },
        forceError:false

      
      }))
    }

  }
  const renderInputFieldsUi = (key = "", label = "", inputPlaceHolder = '', inputType = '', inputValue = '', pattern = '', errorMsg = '', msg = '') => {

    return (
      <div className="primaryContainer">
        <label>{label}</label>
        <input
          placeholder={inputPlaceHolder}
          type={inputType}
          value={inputValue}
          onChange={(e) => { onChangeHandlder(key, e.target.value, pattern, msg) }}
        />

        {
          errorMsg || (state.forError && inputValue === '') ?
            <p style={{ marginLeft: '10px', marginTop: '6px', marginBottom: '0px', padding: '0px', color: 'red' }}>{msg}</p>
            : null
        }

      </div>
    )
  }

  const renderSelectionFieldsUi = (fieldLabel = "", inputPlaceHolder = '', inputType = '', inputValue = '',) => {
    return (
      <div className="primaryContainer" style={{ marginBottom: 20, }}>
        <label>{fieldLabel}</label>
        <select name="cars" id="cars" style={{ padding: '10px' }}
          onChange={(e) => {
            console.log("e=[]", e.target.value);
          }}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
        </select>
      </div>
    )
  }
  const checkisAllFieldFilled = () => {
    for (const key of Object.keys(state.values && state.errors)) {
      if ((state.values[key] === null || state.values[key] === '')) {

        setState((pre) => ({
          ...pre,
          forError: true
        }))
        return true
      }
    }
    return false
  }


  const checkisAllErrorFilled = () => {
    let error = false
    for (const key of Object.keys(state.errors)) {
      if (state.errors[key] === "") {
        console.log("if hwrer");
        error = false
      } else {
        return true
      }
    }
    return error
  }
  const onSubmitHandler = (e) => {
    if (checkisAllErrorFilled() || checkisAllFieldFilled()) {
      // alert("please Fill form Properly")
    } else {
      props.onClickHandler(state.values)
    }
  }

  console.log("state[]", state);
  return (
    <>
      {
        formData.map((value, index) => {
          if (value.key === formData[0].key || index === formData.length - 1) return
          return (renderInputFieldsUi(value.key, value.title, value.pholder, value.inputType, state.values[value.key], value.pattern, state.errors[value.key], value.valMsg))
        })
      }
      <GenericButton onClickHandler={onSubmitHandler} btnName={props.btnName} />

    </>



  )
}
export default GenericPatientForm