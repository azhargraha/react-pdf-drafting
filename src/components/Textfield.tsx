import React, { useRef, useState } from 'react';
import Label, { LabelProps } from './Label';
import { useDebouncedCallback } from '@/hooks/useDebounce';

interface TextfieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    LabelProps {}

const Textfield: React.FC<TextfieldProps> = ({ label, subLabel, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label label={label} subLabel={subLabel} id={props.id} />}
      <input
        type="text"
        className="border solid border-gray-300 outline-none rounded-lg p-2"
        {...props}
      />
    </div>
  );
};

export default Textfield;
