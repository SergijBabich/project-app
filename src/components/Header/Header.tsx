
import React from 'react';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const {t, i18n} = useTranslation('common');
  
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('ru')}>ru</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
  );
};

export default Header;