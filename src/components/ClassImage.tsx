import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div<{ isSmall?: boolean }>`
  overflow: hidden;
  position: relative;
  margin-right: 0px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;

const TrainingType = styled.div`
  position: absolute;
  width: fit-content;
  padding: 5px 8px;
  top: 16px;
  left: 16px;
  background-color: ${({ theme }) => theme.jijo.colors.white};
  opacity: 0.8;
  border-radius: 4px;
`;

const Label = styled.span``;

type Props = {
  imageSource?: string;
  label?: string;
  isSmall?: boolean;
};

const ClassImage: React.FC<Props> = ({ imageSource, isSmall, label }) => (
  <ImageContainer isSmall={isSmall}>
    {label && (
      <TrainingType>
        <Label>{label}</Label>
      </TrainingType>
    )}
    <Image alt="" src={imageSource} />
  </ImageContainer>
);

export default React.memo(ClassImage);
