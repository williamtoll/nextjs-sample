import React from 'react';
import { LabelText, StyledText } from './LabeledInfoStyles';

type Props = {
  label: string;
  names: string[];
  isSmall?: boolean;
};

const LabeledInfoValues: React.FC<Props> = ({ label, names, isSmall }) => {
  if (!names.length) return null;

  return (
    <StyledText isSmall={isSmall}>
      <LabelText>{label}</LabelText>
      {` ${names.join(', ')}`}
    </StyledText>
  );
};

export default React.memo(LabeledInfoValues);
