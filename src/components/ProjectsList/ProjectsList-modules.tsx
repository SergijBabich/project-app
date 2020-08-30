import { ReactNode } from 'react';

export interface InitialValues {
  _id: string
  title: string
  description: string
  token: string
}
  
export interface ProjectsListProps {
  token: string,
  projectsList: InitialValues,
  initialValue: InitialValues,
  editFlag: boolean,
  setEditMode: () => void,
  removeUsersProject: () => void ,
  editUserProject: () => void,
  setInitialValue: (initialValues: InitialValues) => void
  t: (value: string) => ReactNode,
  projectSearching: () => void,
  searchingValue: string | null
}