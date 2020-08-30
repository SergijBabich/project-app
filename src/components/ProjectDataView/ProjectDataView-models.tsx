import { ReactNode } from 'react';

export interface ProjectEditForm {
  titleEdit:string,
  descriptionEdit: string
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
  
export  interface ProjectDataViewProps {
  initialValue: ProjectEditForm
  editFlag: boolean
  setInitialValue: (value: ProjectsData) => void
  setEditMode: (value : boolean) => void
  token: string
  removeUsersProject: () => void
  editUserProject: (title: string, desc: string, id: string, token: string) => void
  projectsList: ProjectsData
  t: (value: string) => ReactNode,
  projectSearching: () => void,
  searchingValue: string | null
}