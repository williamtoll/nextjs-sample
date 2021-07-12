import styled from 'styled-components';
import CenteredCss from './CenteredCss';

export const BoxClassTitle = styled.div<{
  paddingRight: string;
  paddingTop: string;
}>`
  display: ${({ marginTop }) => marginTop};
`;

export const BoxClassInfo = styled.div<{ marginTop: string }>`
  display: ${({ marginTop }) => marginTop};
`;

export const BoxClassDetail = styled.div<{}>`
  padding-right: 20px;
  padding-top: 20px;
  display:flex;
  flexDirection: column;
`;

export const ClassDetailBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBox = styled.div<{
  display?: string;
  justifyContent?: string;
}>`
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const ClassContainer = styled.div<{
  padding?: string;
  flexGrow: string;
}>`
  padding: ${({ padding }) => padding};
  flex: ${({ flexGrow }) => flexGrow};
`;
export const TrainerInfo = styled.div`
  border: 2px solid #f2f2f2;
  borderRadius: 6px;
  padding: 8px 10px;
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  alignItems: center;
  maxWidth: 309px;
`;

export const TrainerName = styled.div`
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

export const PageContainer = styled.div`
  margin: 0;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-rows: 100%;
  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
  ${CenteredCss};
`;

export const ClassNameLabel = styled.div`
  margin: 0px 0px;
  font-size: 3.2rem;
  line-height: 3.2rem;
  @media (max-width: 650px) {
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
`;

export const ImageContainer = styled.div`
  max-width: 276px;
  @media (max-width: 550px) {
    max-width: 200px;
  }
`;

export const ChipContain = styled.div`
  margin-top: 20px;
  @media (max-width: 450px) {
    display: none;
  }
`;
export const ChipContainResponsive = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 450px) {
    display: none;
  }
`;

export const ChipContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lighterGrey};
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: inline-block;
  &:nth-child(2) {
    margin-left: 8px;
  }
  @media (max-width: 650px) {
    padding: 4px 12px;
  }
`;

export const DurationLabel = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.DarkGrey};
`;

export const ClassDetailsBox = styled.div`
  margin-bottom: 10px;
  @media (max-width: 376px) {
    display: none;
  }
`;

export const TitleClassDetails = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

export const DetailsLongText = styled.div`
  font-size: 17px;
  line-height: 22px;
  font-weight: 300;
`;
