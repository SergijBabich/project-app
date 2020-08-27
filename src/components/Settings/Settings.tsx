import React, { useState } from 'react';
import './Settings.css';

interface Settings {
  onChangeBackgroundColor: (mobe: boolean)  => void
}

const Settings: React.FunctionComponent<Settings> = (props: Settings) => { 
  const [mode, setMode] = useState(false);
  const handleChange = (): void => {
    setMode(!mode);
    props.onChangeBackgroundColor(mode);    
  };
  return (
    <div className='settings'>
      <input type="checkbox" name={'name'} onChange={handleChange} />
      <span>Light/Dark</span>
    </div>
  );
};

export default Settings;
