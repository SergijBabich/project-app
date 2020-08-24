import React from "react";
import Sidebar from "../sidebar/sidebar.component";
import ProjectCreatorContainer from '../project-creator/project-creator-container.component';
import ProjectGeneralContainer from '../project-general/project-general-container.component';
import {Route} from  'react-router-dom';
import Settings from "../settings/settings.component";
import main from './main.module.css';
const Main = (props) => {
    return (
        <div className={main.main}>
            <div className={main.main__sidebar}>
                <Sidebar/>
            </div>
            <div className={main.main__general}>
                <Route path='/main/create-project'  component = { ProjectCreatorContainer } />
                <Route path='/main/projects'  render = { () => {
                   return    <React.Suspense>
                      <ProjectGeneralContainer/>
                     </React.Suspense>
                    }} />
                <Route path='/main/settings'  render = { () => {
                   return    <React.Suspense>
                      <Settings triggerSearch={props.triggerSearch}/>
                     </React.Suspense>
                    }} />
            </div>
        </div>
    )
}

export default Main;
