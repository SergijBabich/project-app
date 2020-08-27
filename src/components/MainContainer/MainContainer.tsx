import React from 'react';
import {Route} from  'react-router-dom';
import {connect} from 'react-redux';
import { withTranslation } from 'react-i18next';
import Sidebar from '../Sidebar';
import ProjectCreatorContainer from '../ProjectCreatorContainer';
import ProjectGeneralContainer from '../ProjectContainer/ProjectContainer';
import Settings from '../Settings';
import './MainContainer.css';
import {MainProps} from './MainContainer-models';
import {closeSession} from '../../redux/LoginReducer';

const Main: React.FunctionComponent<MainProps>=(props: MainProps) => {
  return (
    <div className='main'>
      <div className='main__sidebar'>
        <Sidebar t ={props.t} closeSession={props.closeSession} />
      </div>
      <div className='main__general'>
        <Route path='/main/create-project' render = {()=> {
          return <React.Suspense>
            <ProjectCreatorContainer />
          </React.Suspense>;
        }} />
        <Route path='/main/projects' render = { () => {
          return <React.Suspense>
            <ProjectGeneralContainer t={props.t}/>
          </React.Suspense>;
        }} />
        <Route path='/main/settings' render = {()=> {
          return <React.Suspense>
            <Settings t={props.t} onChangeBackgroundColor={props.onChangeBackgroundColor}/>
          </React.Suspense>;
        }} />
      </div>
    </div>
  );
};


const mapStateToProps = (state: LoginProps) => {
  return {
    token: state.login.token,
  };
};

const MainContainer = connect(mapStateToProps, {closeSession} )(Main); 
const MainContainerTranslated = withTranslation('common')(MainContainer);
export default MainContainerTranslated;
