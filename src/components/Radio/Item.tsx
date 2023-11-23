import React from 'react';

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioItem: React.FC<RadioItemProps> = ({ label, ...props }) => {
  return (
    <label htmlFor={props.id} className="flex gap-2 cursor-pointer text-sm">
      <input className="cursor-pointer" type="radio" {...props} />
      {label}
    </label>
  );
};

export default RadioItem;
