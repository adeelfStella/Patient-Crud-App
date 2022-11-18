import React, { useState } from "react";
import Enums from "../utils/Enums";

const GenericButton = ({ onClickHandler,btnName, btnStyl }) => {

  return (
    <>
      <button className="btn"  style={btnStyl}
      onClick={onClickHandler}
      >{btnName}</button>

    </>
  )
}
export default GenericButton
const styles = {
  // primaryContainer: {
  //   display: 'flex', backgroundColor:'black', color:'white',width:'100%', justifyContent:'center',marginTop:'10px',padding:'10px',borderRadius:'5px' 
  // }
 
 

}