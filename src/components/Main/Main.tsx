import React from 'react';
import {Route} from  'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import ProjectCreatorContainer from '../ProjestsCreator/ProjestsCreator';
import ProjectGeneralContainer from '../ProjectContainer/ProjectContainer';
import Settings from '../Settings/Settings';
import './Main.css';

interface Main {
  onChangeBackgroundColor: () => void
}

const Main: React.FunctionComponent<Main> = (props:Main) => {
  return (
    <div className='main'>
      <div className='main__sidebar'>
        <Sidebar/>
      </div>
      <div className='main__general'>
        <Route path='/main/create-project'  component = { ProjectCreatorContainer } />
        <Route path='/main/projects'  render = { () => {
          return    <React.Suspense>
            <ProjectGeneralContainer/>
          </React.Suspense>;
        }} />
        <Route path='/main/settings'  render = { () => {
          return    <React.Suspense>
            <Settings onChangeBackgroundColor={props.onChangeBackgroundColor}/>
          </React.Suspense>;
        }} />
      </div>
    </div>
  );
};

export default Main;
