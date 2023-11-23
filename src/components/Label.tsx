import React from 'react';

export interface LabelProps {
  label: string;
  subLabel?: string;
  id?: string;
}

const Label: React.FC<LabelProps> = ({ label, subLabel, id }) => {
  return (
    <div className="flex flex-col">
      <label id={id} className="text-sm font-bold">
        {label}
      </label>
      {subLabel && (
        <p className="font-lato font-[400] text-[13px] text-[#616161]">
          {subLabel}
        </p>
      )}
    </div>
  );
};

export default Label;
