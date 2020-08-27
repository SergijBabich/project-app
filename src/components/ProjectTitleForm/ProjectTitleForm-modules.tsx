import { ReactNode } from 'react';

export interface ProjectTitleFormProps {
  handleSubmit: () => void
  checkTtitle: boolean
  t: (value: string) => ReactNode
}