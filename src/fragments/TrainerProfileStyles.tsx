import styled from 'styled-components';

export const TabPanel = styled.div`
  width: 100%;
  display: none;
  padding: 8px;
`;

export const StyleAppBar = styled.div`
  display: flex;
  flex-direction: row !important;
  scrollbar-width: none;
  color: #4c33c3 !important;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  box-shadow: none !important;
`;

export const StyledLink = styled.div`
  display: flex;
  flex-direction: row !important;
  overflow-x: scroll;
  :visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  padding-bottom: 10px;
  text-transform: none !important;
`;

export const StyledTab = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  padding: 6px 12px;
  overflow: hidden;
  position: relative;
  font-size: 16px;
  max-width: 264px;
  min-width: 72px;
  box-sizing: border-box;
  min-height: 48px;
  text-align: center;
  flex-shrink: 0;
  font-weight: 600;
  line-height: 1.75;
  white-space: normal;
  text-transform: capitalize !important;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }

  &:active {
    opacity: 0.6;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const RightTitles = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin: 15px 0px;
`;

export const NextClassesTitle = styled.div`
  font-size: 24px;
  margin: 15px 0px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
