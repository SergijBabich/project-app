import React, { useState } from 'react';
import './App.css';
import LoginContainer from './components/LoginContainer/LoginContainer';
import Main from './components/Main/Main';
import {HashRouter, Route, Redirect} from  'react-router-dom';
import {Provider} from  'react-redux';
import store from './redux/ReduxStore'

const App = () => { 
  const [mode, setMode] = useState(true);

  const onChangeBackgroundColor = (value:Boolean) => {
    localStorage.setItem("mode", value)
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
                          <div className='container__login'>
                            <LoginContainer />
                          </div>
                        </React.Suspense>
            }} />
            </div>
            <div >
              <Route path='/main'  render= { ()=> {
                return  <React.Suspense>
                 <div className="container__main">
                   <Main onChangeBackgroundColor={onChangeBackgroundColor} />
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
