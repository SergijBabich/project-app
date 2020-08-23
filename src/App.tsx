import React from 'react';
import './App.css';
import LoginContainer from './components/login/login-container.component';
import Main from './components/main/main.component';

import {BrowserRouter,HashRouter, Route} from  'react-router-dom';
import {Provider} from  'react-redux';
import store from './redux/redux_store'

function App() {
  return (
    <div className="container">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider  store ={store} >
          <div className="container-login">
            <Route path='/login'  render= { ()=> {
              return  <React.Suspense>
                         <div class='app_wrapper'>
                             <LoginContainer />
              
                         </div>
                    </React.Suspense>
            }} />
          </div>
          <div className="container-main">
          <Route path='/main'  render= { ()=> {
           return  <React.Suspense>
            <div>
                <Main />
            </div>
              </React.Suspense>
        }} />
         </div>
         </Provider>
       </BrowserRouter>
    
    </div>
    
  );
}

export default App;
