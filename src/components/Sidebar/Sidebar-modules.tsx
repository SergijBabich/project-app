import { ReactNode } from 'react';

export interface SidebarProps {
  t: (value: string) => ReactNode
  closeSession: (token: boolean ) => void
}
  