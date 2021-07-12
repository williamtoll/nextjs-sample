import styled from 'styled-components';
import CenteredCss from './CenteredCss';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${CenteredCss};
`;

export const HeaderWrapper = styled.header`
  padding: 24px;
  width: 100%;
  display: flex;
  ${CenteredCss}
`;
