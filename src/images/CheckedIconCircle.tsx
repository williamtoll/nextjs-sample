import React from 'react';
import { Svg } from 'shared/Svg';


interface Props {
  className?: string;
}
export const CheckedIconCircle: React.FC<Props> = ({ className }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="12" fill="#EDEBF9" />
    <path
      d="M7.98598 12.347L11.3796 15.175L15.9392 9.08135"
      stroke="#4C33C3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
