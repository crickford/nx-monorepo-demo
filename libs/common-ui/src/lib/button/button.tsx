import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode;
}

export function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <button
      className={`mt-4 bg-white text-blue-500 px-4 py-2 rounded`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
