import { ReactNode } from 'react';

export interface StateProps {
  token: string
  projectsList: ProjectsData
  status: string
  initialValue: InitialValues
  editFlag: boolean,
  searchingValue: string | null
}
  
export interface ProjectPageProps {
  token: string
  projectsList: Array<ProjectsData>
  status: string
  initialValue: InitialValues
  editFlag: boolean,
  searchingValue: string | null
  getUsersProjects: (token: string) => void
  editUserProject: () => void
  removeUsersProject: () => void
  setInitialValue: () => void
  setEditMode: () => void
  t: (value: string) => ReactNode,
  projectSearching: () => void
}
  
export interface InitialValues {
  titleEdit: string,
  descriptionEdit: string
}
  
export interface ProjectsData {
  _id: string,
  title:string,
  description: string,
  token: string
}