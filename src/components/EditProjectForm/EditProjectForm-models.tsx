export interface InitialValues {
  titleEdit: string,
  descriptionEdit: string
}
  
export interface EditProjectProps {
  projectsList: InitialValues,
  cancelEdit: () => void,
  initialValues: InitialValues,
  handleSubmit: () => void
}