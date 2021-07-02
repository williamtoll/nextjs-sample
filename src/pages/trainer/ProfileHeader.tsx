import React from 'react';
import styled from 'styled-components';

type Props = {
  trainerName: string;
  rightActionComponent?: React.ReactNode;
  children?: React.ReactNode;
};

const ProfileHeaderUI: React.FC<Props> = ({ trainerName, children }) => (
  <>
    <HeaderWrapper>
      <NameLabel noMargin>{trainerName}</NameLabel>
      <div>{children}</div>
    </HeaderWrapper>
    <HorizontalLine />
  </>
);

const HeaderWrapper = styled.div<{ isClientView?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HorizontalLine = styled.hr`
  border-color: #efefef;
  border-style: solid;
  width: 100%;
  margin-top: 29px;
`;

const NameLabel = styled.span`
  color: $primary-color;
  margin: 0px;
  line-height: 45px;
  font-size: 42px;
  font-weight: bold;
`;

export const ProfileHeader = React.memo(ProfileHeaderUI);
