import { ReactNode } from 'react';

export interface ProjectDescriptionFormProps {
    handleSubmit: () => void
    t: (value: string) => ReactNode
  }
    