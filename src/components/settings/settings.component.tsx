import React, { useState, useRef } from "react";
import { NavLink, Route } from 'react-router-dom'
import s from './settings.module.css'
const Settings = (props) => { 
   
    const [mode, setMode] = useState(false);

   const handleChange = () => {
       setMode(!mode)
       props.triggerSearch(mode);
       
   }
    return (
       <div className={s.settings}>
             <input
                checked={mode}
                  type="checkbox"
                  name={'name'}
                  onChange={handleChange}
             />
             <span>Light/Dark</span>
       </div>
    )
}

export default Settings;
