import React, { useState, Suspense } from 'react';
import './App.css';
import LoginContainer from './components/LoginContainer/index';
import MainContainer from './components/MainContainer/index';
import {HashRouter, Route, Redirect} from  'react-router-dom';
import {Provider} from  'react-redux';
import store from './redux/ReduxStore';
import Header from './components/Header/index';

const App = () => { 
  const [mode, setMode] = useState(true);

  const onChangeBackgroundColor = (value:boolean) => {
    localStorage.setItem('mode', value);
    setMode(value);
  };
  return (
    <div className={mode? 'container_light': 'container_dark'}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store ={store} >
          <Suspense fallback="loading">
            <Header />
            <Route exact path='/' render={() => <Redirect to='/login'/>}/>
            <div>
              <Route path='/login'  render= { ()=> {
                return  <React.Suspense>
                  <div className='container__login'>
                    <LoginContainer />
                  </div>
                </React.Suspense>;
              }} />
            </div>
            <div>
              <Route path='/main' render= { ()=> {
                return  <React.Suspense>
                  <div className='container__main'>
                    <MainContainer onChangeBackgroundColor={onChangeBackgroundColor} />
                  </div>
                </React.Suspense>;
              }} />
            </div>
          </Suspense>
        </Provider>
      </HashRouter>
    </div>
  );
};

export default App;
