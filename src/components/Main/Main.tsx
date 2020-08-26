import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProjectCreatorContainer from '../ProjestsCreator/ProjestsCreator';
import ProjectGeneralContainer from '../ProjectContainer/ProjectGeneralContainer';
import {Route} from  'react-router-dom';
import Settings from "../Settings/Settings";
import './Main.css'

const Main = (props) => {
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
                    </React.Suspense>
          }} />
        <Route path='/main/settings'  render = { () => {
          return    <React.Suspense>
            <Settings onChangeBackgroundColor={props.onChangeBackgroundColor}/>
                     </React.Suspense>
        }} />
      </div>
    </div>
  )
}

export default Main;
