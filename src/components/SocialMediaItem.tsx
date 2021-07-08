import React from 'react';

import styled  from 'styled-components';
import { socialIconsMap } from 'shared/icons';

interface SocialMediaItemProps {
  type: keyof typeof socialIconsMap;
  url: string;
}

const SocialMediaContainerSize = '40px';

const ClientContainer = styled.a`
  width: ${SocialMediaContainerSize};
  height: ${SocialMediaContainerSize};
  border-radius: ${SocialMediaContainerSize};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EAE6F8;
  margin-right: 16px;
  & > svg {
    color: #4C33C3;
  }
`;

export const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  type,
  url,
}) => {
  return (
    <ClientContainer target="_blank" href={url}>
      {socialIconsMap[type]}
    </ClientContainer>
  );
};

export default SocialMediaItem;
