import React from 'react';
import { Svg } from 'shared/Svg';

interface Props {
  className?: string;
}
export const TwitterIcon: React.FC<Props> = ({ className }) => (
  <Svg width={20} height={20} className={className}>
    <path
      d="M18.125 4.96681C17.5273 5.22462 16.877 5.41017 16.207 5.48243C16.9026 5.06922 17.4234 4.41641 17.6719 3.64649C17.0192 4.03475 16.3042 4.30701 15.5586 4.45118C15.247 4.11803 14.8701 3.85263 14.4514 3.67151C14.0327 3.49039 13.5812 3.39744 13.125 3.39845C11.2793 3.39845 9.79492 4.89454 9.79492 6.73048C9.79492 6.98829 9.82617 7.2461 9.87695 7.49415C7.11328 7.34962 4.64844 6.02931 3.00977 4.00782C2.71118 4.51781 2.55471 5.0985 2.55664 5.68946C2.55664 6.84571 3.14453 7.86525 4.04102 8.46486C3.5127 8.44405 2.99676 8.29884 2.53516 8.04103V8.08204C2.53516 9.70118 3.67969 11.043 5.20508 11.3516C4.91867 11.426 4.62404 11.464 4.32812 11.4649C4.11133 11.4649 3.90625 11.4434 3.69922 11.4141C4.12109 12.7344 5.34961 13.6934 6.8125 13.7246C5.66797 14.6211 4.23438 15.1485 2.67773 15.1485C2.39844 15.1485 2.14062 15.1387 1.87305 15.1074C3.34961 16.0547 5.10156 16.6016 6.98828 16.6016C13.1133 16.6016 16.4648 11.5274 16.4648 7.12306C16.4648 6.97853 16.4648 6.83399 16.4551 6.68946C17.1035 6.21485 17.6719 5.62696 18.125 4.96681Z"
      fill="#1DA1F2"
    />
  </Svg>
);