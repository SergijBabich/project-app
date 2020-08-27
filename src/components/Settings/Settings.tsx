import React, { useState } from 'react';
import './Settings.css';
import {SettingsProps} from './Settings-modules';

const Settings: React.FunctionComponent<SettingsProps> = (props: SettingsProps) => { 
  const [mode, setMode] = useState(false);
  const handleChange = (): void => {
    setMode(!mode);
    props.onChangeBackgroundColor(mode);    
  };

  return (
    <div className='settings'>
      <input type='checkbox' name={'name'} onChange={handleChange} />
      <span>{props.t('settings.mode')}</span>
    </div>
  );
};

export default Settings;
