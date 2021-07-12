import styled from 'styled-components';
import CenteredCss from './CenteredCss';

export const IconWrapper = styled.a`
  transition: opacity 0.5s ease-in-out;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const TrainerInfoWrapper = styled.div`
  ${CenteredCss};
  padding-top: 40px;
`;

export const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`;

export const ColumnsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const BigColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 24px;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 39px;
`;

export const TrainerDetailsWrap = styled.div`
  margin-right: 0;
  @media (max-width: 599px) {
    margin-right: 24px;
  }
`;

export const BaseInfoWrapper = styled.div`
  width: 100%;
  padding-bottom: 24px;
  margin-top: 32px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  position: relative;
  @media (max-width: 599px) {
    padding-bottom: 32px;
  }
  @media (max-width: 960px) {
    margin-top: 0px;
  }
`;

export const BioText = styled.span`
  font-family: Mukta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #000;
  line-height: 25.6px;
  padding-bottom: 16px;
  text-align: justify;
`;

export const ImageContainer = styled.div`
  max-width: 276px;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 550px) {
    max-width: 200px;
  }
`;

export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.div`
  font-size: 24px;
  margin: 15px 0px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
