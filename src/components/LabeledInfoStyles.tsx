import styled from 'styled-components';

export const StyledText = styled.span<{ isSmall?: boolean }>`
  ${({ theme, isSmall }) => `
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

export const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`;
