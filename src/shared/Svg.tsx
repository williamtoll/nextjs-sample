import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  className?: string;
}
export const Svg: React.FC<Props> = ({ width, height, children, ...rest }) => {
  const aspect = width / height;
  const adjustedHeight = Math.ceil(width / aspect);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      fill="none"
      {...rest}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${adjustedHeight}`}
    >
      {children}
    </svg>
  );
};
