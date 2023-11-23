import { Option } from '@/types/input';
import React from 'react';
import cl from 'classnames';
import Label, { LabelProps } from '../Label';
import RadioItem from './Item';

interface RadioGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    LabelProps {
  options: Option[];
  variant?: 'col' | 'row';
  defaultOption?: Option;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  label,
  variant = 'col',
  defaultOption,
  subLabel,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label label={label} id={props.id} subLabel={subLabel} />}
      <div
        className={cl('flex', {
          'flex-col': variant === 'col',
          'flex-row': variant === 'row',
          'gap-2': variant === 'col',
          'gap-8': variant === 'row',
        })}
      >
        {options.map((option) => (
          <RadioItem
            {...props}
            key={option.value.split(' ').join('-')}
            id={option.value.split(' ').join('-')}
            label={option.label}
            value={option.value}
            defaultChecked={
              defaultOption ? defaultOption.value === option.value : false
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
