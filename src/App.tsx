import React, { useState } from 'react';
import './App.css';
import LoginContainer from './components/login/login-container.component';
import Main from './components/main/main.component';

import {HashRouter, Route, Redirect, BrowserRouter} from  'react-router-dom';
import {Provider} from  'react-redux';
import store from './redux/redux_store'


const App = () => { 

  const [mode, setMode] = useState(true);
  const triggerSearch = (value:Boolean) => {
    setMode(value)
  }
  return (
    <div className={mode? "container_light": "container_dark"}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider  store ={store} >
        <Route exact path='/' render={() => <Redirect to='/login'/>}/>
          <div>
            <Route path='/login'  render= { ()=> {
              return  <React.Suspense>
                         <div class='container__login'>
                             <LoginContainer />
              
                         </div>
                    </React.Suspense>
            }} />
          </div>
          <div >
          <Route path='/main'  render= { ()=> {
           return  <React.Suspense>
            <div className="container__main">
                <Main triggerSearch={triggerSearch} />
            </div>
              </React.Suspense>
        }} />
         </div>
         </Provider>
       </HashRouter>
    
    </div>
    
  );
}

export default App;
