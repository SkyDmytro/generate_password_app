import { cn } from '@/lib/cn';

import { ButtonHTMLAttributes, ReactNode } from 'react';

export const Button = ({
  className,
  children,
  ...props
}: {
  className?: string;
  text?: string;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </button>
  );
};
