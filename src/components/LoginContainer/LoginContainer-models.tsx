import { ReactNode } from 'react';

export interface LoginProps {
  token:string,
  status:string,
  login:string,
  errorCode:string,
  sendFormForAuthorization?: (login: string, password: string) => void
  t: (value: string) => ReactNode
}
  
export interface FormValue {
  login: string,
  password: string
}