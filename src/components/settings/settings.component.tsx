import React from "react";
import { NavLink, Route } from 'react-router-dom'
import '../../App.css';
const Settings = () => {
    
   const handleChange = () => {
       console.log("ok")
   }
    return (
       <div>
             <input
                 type="checkbox"
                  name={'name'}
                 onChange={handleChange}
             />
       </div>
    )
}

export default Settings;
