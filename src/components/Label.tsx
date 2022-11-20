import { FC } from 'react';
import './label.css';

export interface LabelProps {
  /** The label value */
  value: string;
  /** The label size */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /** The label color */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** The label background color */
  bgColor?: string;
}

export const Label: FC<LabelProps> = ({ value, size = 'normal', color = 'primary', bgColor }) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {value}
    </span>
  );
};

export default Label;
