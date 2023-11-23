import React from 'react';
import styles from '@/styles/components/Button.module.css';
import cl from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'secondary' | 'danger';
  radius?: 'regular' | 'round';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  color = 'primary',
  radius = 'regular',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cl(
        styles.base,
        styles[variant],
        styles[color],
        styles[radius],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
