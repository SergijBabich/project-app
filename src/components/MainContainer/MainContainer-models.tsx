import { ReactNode } from 'react';

export interface MainProps {
  onChangeBackgroundColor: () => void
  t: (value: string) => ReactNode
  closeSession: (token: string, status: string ) => void
}