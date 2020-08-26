import React, { useState } from "react";
import './Settings.css'
const Settings = (props) => { 
  const [mode, setMode] = useState(false);
  const handleChange = () => {
    setMode(!mode)
    props.onChangeBackgroundColor(mode);    
  }
  return (
    <div className='settings'>
      <input type="checkbox" name={'name'} onChange={handleChange} />
      <span>Light/Dark</span>
    </div>
  )
}

export default Settings;
