import { ReactNode } from 'react';
import style from './Container.module.css';

interface ContainerProps {
  className?: string;
  page?: boolean;
  children: ReactNode;
}

export default function Container({ className = '', page = false, children }: ContainerProps) {
  const classNames = `${style.container} ${page ? style.page : ''
    } ${className}`;
  return <div className={classNames}>{children}</div>;
}
