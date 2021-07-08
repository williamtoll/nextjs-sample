import React from 'react';
import styled from 'styled-components';

type Props = {
  title?: string;
  label?: string;
  joinedData: string;
  trainerSinceValue: string;
  trainerExperience: string;
};

const JoinedData: React.FC<Props> = ({
  title,
  label,
  joinedData,
  trainerSinceValue,
  trainerExperience,
}) => {
  return (
    <Container>
      {title && (
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      )}
      <ValuesContainer>
        {label && <LabelText>Started training:</LabelText>}
        <ValueContainer key={`${label}-${trainerSinceValue}`}>
          <StyledBody>{trainerSinceValue}</StyledBody>
        </ValueContainer>
        <TrainerSinceContainer>
          <StyledBody>{trainerExperience}</StyledBody>
        </TrainerSinceContainer>
      </ValuesContainer>

      <ValuesContainer>
        <LabelText>Joined Jijo:</LabelText>
        <ValueContainer key={`${label}-${joinedData}`}>
          <StyledBody>{joinedData}</StyledBody>
        </ValueContainer>
      </ValuesContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lighterGrey};
`;

const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`;

const ValuesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.lighterGrey};
  width: fit-content;
  border-radius: 4px;
  margin: 8px 0 8px 8px;
`;

const TrainerSinceContainer = styled.div`
  padding: 8px 50px;
  margin: 8px 0 8px 8px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 16px;
  @media (max-width: 900px) {
    margin-top: 15px;
  }
`;

const StyledBody = styled.h4`
  color: #4c33c3;
`;

export default React.memo(JoinedData);
