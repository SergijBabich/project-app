import { ReactNode } from 'react';

export interface LoginFormProps {
  currentToken: string,
  login: string
  errorCode: string,
  handleSubmit: () => void
  t: (value: string) => ReactNode
}