import { Cross1Icon } from '@radix-ui/react-icons';
import React from 'react';

const DeleteButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <button
      className="ml-auto bg-red-500 w-5 h-5 rounded-full flex justify-center items-center"
      {...props}
    >
      <Cross1Icon height={10} width={10} stroke="white" strokeWidth={2} />
    </button>
  );
};

export default DeleteButton;
