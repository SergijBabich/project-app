import { ReactNode } from 'react';

export interface ProjectsData {
  _id: string,
  title:string | null,
  description: string,
  token: string
}
  
export interface StateProps {
  token: string
  projectId: string
  projectsList: string
}
  
export interface FormValue {
  title:string | null,
  description: string,
}
  
export interface ProjectCreatorProps {
  createUsersProject: (title: string, desc: string, token: string) => void 
  projectId: string
  projectsList: Array<ProjectsData>
  token: string
  t: (value: string) => ReactNode
}