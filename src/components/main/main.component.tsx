import React from "react";
import Sidebar from "../sidebar/sidebar.component";
import ProjectCreatorContainer from '../project-creator/project-creator-container.component';
import ProjectGeneralContainer from '../project-general/project-general-container.component';
import {HashRouter, Route, withRouter} from  'react-router-dom';

const Main = (props) => {
    return (
        <div className=''>
            <div className="">
                <Sidebar/>
            </div>
            <div className=''>
                <Route path='/main/create-project'  component = { ProjectCreatorContainer } />
                <Route path='/main/projects'  render = { () => {
                   return    <React.Suspense>
                      <ProjectGeneralContainer/>
                     </React.Suspense>
                    }} />
            </div>
        </div>
    )
}

export default Main;
