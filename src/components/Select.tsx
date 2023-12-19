import React from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import Label, { LabelProps } from './Label';

interface SelectProps extends ReactSelectProps, Partial<LabelProps> {}

const Select: React.FC<SelectProps> = ({ label, subLabel, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label label={label} id={props.id} subLabel={subLabel} />}
      <ReactSelect {...props} />
    </div>
  );
};

export default Select;
