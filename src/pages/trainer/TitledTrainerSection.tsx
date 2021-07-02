import React from 'react';
import styled from 'styled-components';

type Props = {
  title?: string;
  label?: string;
  values?: string[];
  children?: React.ReactChild | React.ReactNodeArray;
};

const TitledTrainerSection: React.FC<Props> = ({
  title,
  label,
  values,
  children,
}) => {
  if (!values?.length && !children) return null;

  return (
    <Container>
      {title && (
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      )}
      <ValuesContainer>
        {children || (
          <>
            {label && <LabelText>{label}</LabelText>}
            {values?.map((value) => (
              <ValueContainer key={`${label}-${value}`}>
                <StyledBody>{value}</StyledBody>
              </ValueContainer>
            ))}
          </>
        )}
      </ValuesContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 24px;
  border-bottom: 2px solid #f2f2f2;
`;

const LabelText = styled.h3`
  color: #7d787f;
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
  background-color: #f2f2f2;
  width: fit-content;
  border-radius: 4px;
  margin: 8px 0 8px 8px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  @media (max-width: 900px) {
    margin-top: 15px;
  }
`;

const StyledBody = styled.h4`
  color: #4c33c3;
`;

export default React.memo(TitledTrainerSection);
