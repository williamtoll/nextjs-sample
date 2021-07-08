import styled from 'styled-components';
import React from 'react';

const Text = styled.span<{ isSmall?: boolean }>`
  ${({ theme, isSmall }) => css`
    font-size: ${isSmall ? 12 : 14}px;
    display: block;
    margin-bottom: ${theme.space.xsmall};
    ${theme.mediaQueries.small} {
      font-size: 16px;
      display: inline;
      margin-bottom: 0;
    }
  `};
`;

const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`;

type Props = {
  label: string;
  names: string[];
  isSmall?: boolean;
};

const LabeledInfoValues: React.FC<Props> = ({ label, names, isSmall }) => {
  if (!names.length) return null;

  return (
    <Text isSmall={isSmall}>
      <LabelText>{label}</LabelText>
      {` ${names.join(', ')}`}
    </Text>
  );
};

export default React.memo(LabeledInfoValues);
