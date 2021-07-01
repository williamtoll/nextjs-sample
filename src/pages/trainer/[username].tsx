import React from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { ProfileHeader } from './ProfileHeader';
import TitledTrainerSection from './TitledTrainerSection';
import { ImageType } from './types';
import CenteredCss from './CenteredCss';

type Props = {
  firstname: string;
  lastname: string;
  bio: string;
  profileImage: ImageType;
  images: ImageType[];
};

const TrainerInfoWrapper = styled.div`
  ${CenteredCss};
  padding-top: 40px;
`;

const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`;

const ColumnsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const BigColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 39px;
`;

const Title = styled.h1`
  color: blue;
`;

const TrainerDetailsWrap = styled.div`
  margin-right: 0;
  @media (max-width: 599px) {
    margin-right: 24px;
  }
`;

const StyledHr = styled.hr`
  border-color: rgb(239, 239, 239);
  border-style: solid;
  width: 100%;
  margin-top: 29px;
`;

const BaseInfoWrapper = styled.div`
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

const BioText = styled.span`
  font-family: Mukta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #000;
  line-height: 25.6px;
  padding-bottom: 16px;
`;

const ImageContainer = styled.div`
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

const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrainerProfile: React.FC<Props> = ({
  firstname,
  lastname,
  bio,
  profileImage,
  images,
}) => {
  return (
    <>
      <TrainerInfoWrapper>
        <StyledHr />
        <CenteredContent>
          <ProfileHeader
            trainerName={`${firstname !== undefined ? firstname : ''} ${
              lastname !== undefined ? lastname : ''
            }`}
          ></ProfileHeader>
          <ColumnsWrapper>
            <BigColumn>
              <TrainerDetailsWrap>
                <BasicInfoContainer>
                  <BaseInfoWrapper>
                    <ImageContainer>
                      <img
                        alt={firstname}
                        src={profileImage ? profileImage.url : images[0].url}
                      />
                    </ImageContainer>
                  </BaseInfoWrapper>
                  <BioText>{bio}</BioText>
                  <TitledTrainerSection label="Gender: " values={['Male']} />
                </BasicInfoContainer>
              </TrainerDetailsWrap>
            </BigColumn>
          </ColumnsWrapper>
        </CenteredContent>
      </TrainerInfoWrapper>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const API_URL = 'https://dev-api.myjijo.com/api/v1';
  const { username } = params;
  const res = await fetch(`${API_URL}/trainer/${username}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data.result,
    },
  };
};

export default TrainerProfile;
