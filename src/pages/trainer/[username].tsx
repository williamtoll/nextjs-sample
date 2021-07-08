/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import ProfileHeader from '../../components/ProfileHeader';
import TitledTrainerSection from '../../components/TitledTrainerSection';
import { CalendarEvent, ImageType, TrainerCertificate } from 'shared/types';
import CenteredCss from '../../styles/CenteredCss';
import JoinedData from '../../components/JoinedData';
import { SocialMediaItem } from '../../components/SocialMediaItem';
import PricingSection from '../../components/PricingSection';
import TrainerProfileMobile from '../../fragments/TrainerProfileMobile';
import { ClassDetailsBookBox } from '../../components/ClassDetailsBookBox';
import { CertificateItemProf } from '../../components/ClientCertificateProf';
import * as CertificateUtils from '../../utils/certificate';
import { JijoIcon } from 'images/JijoIcon';
import { useEffect } from 'react';
import { useState } from 'react';

type Props = {
  name: string;
  bio: string;
  profileImage: ImageType;
  images: ImageType[];
  pricings: Object;
  instagram: string;
  facebook: string;
  linkedIn: string;
  twitter: string;
  certificates: TrainerCertificate[];
  trainerSince: string;
  joinDate: string;
  preferredTraineePersonality: string[];
  preferredAgeGroup: string[];
  instructionType: string[];
  classType: string[];
  personality: string[];
  nextSessions: any;
};

const TrainerProfile: React.FC<Props> = ({
  name,
  bio,
  profileImage,
  images,
  pricings,
  instagram,
  facebook,
  linkedIn,
  twitter,
  certificates,
  trainerSince,
  joinDate,
  preferredTraineePersonality,
  preferredAgeGroup,
  instructionType,
  classType,
  personality,
  nextSessions,
}) => {
  console.log('nextSessions fe', nextSessions);

  const [bookingSlots, setBookingSlots] = useState();

  useEffect(() => {
    if (nextSessions && nextSessions.result) {
      setBookingSlots(nextSessions.result);
      console.log('bookingSlots fe', bookingSlots);
    }
  }, [nextSessions]);

  useEffect(() => {
    console.log('booking slots ', bookingSlots);
  }, [bookingSlots]);

  return (
    <>
      <StyledContainer>
        <HeaderWrapper>
          <IconWrapper href={'https://myjijo.com'}>
            <JijoIcon />
          </IconWrapper>
        </HeaderWrapper>
        <TrainerInfoWrapper>
          <CenteredContent>
            <ProfileHeader trainerName={name}></ProfileHeader>
            <ColumnsWrapper>
              <BigColumn>
                <TrainerDetailsWrap>
                  <BasicInfoContainer>
                    <BaseInfoWrapper>
                      <ImageContainer>
                        <img
                          alt={name}
                          src={profileImage ? profileImage.url : images[0].url}
                        />
                      </ImageContainer>
                    </BaseInfoWrapper>
                    <BioText>{bio}</BioText>
                    <TitledTrainerSection label="Gender: " values={['Male']} />
                    <div className="displayMdUp">
                      <JoinedData
                        title="Fitness Training Experience"
                        label="Joined Jijo:"
                        trainerSinceValue={trainerSince}
                        trainerExperience={trainerSince}
                        joinedData={joinDate}
                      />

                      <TitledTrainerSection title="Fitness Certifications">
                        {certificates.length > 0 &&
                          certificates.map((c) => (
                            <CertificateItemProf
                              key={c.id}
                              certificate={c}
                              certificateNumber={CertificateUtils.getCertificateNumber(
                                c.id,
                                certificates,
                              )}
                            />
                          ))}
                      </TitledTrainerSection>

                      <TitledTrainerSection
                        title="Preferred Client Attributes"
                        values={preferredTraineePersonality}
                      />
                      <TitledTrainerSection
                        title="Age Group Focus"
                        values={preferredAgeGroup}
                      />
                      <TitledTrainerSection
                        title="Instruction Type Offered"
                        values={instructionType}
                      />
                      <TitledTrainerSection
                        title="Class Types"
                        values={classType}
                      />
                      <TitledTrainerSection
                        title="Training Style"
                        values={personality}
                      />

                      <TitledTrainerSection title="Social Media">
                        <>
                          {!!instagram && (
                            <SocialMediaItem type="instagram" url={instagram} />
                          )}
                          {!!facebook && (
                            <SocialMediaItem type="facebook" url={facebook} />
                          )}
                          {!!twitter && (
                            <SocialMediaItem type="twitter" url={twitter} />
                          )}
                          {!!linkedIn && (
                            <SocialMediaItem type="linkedIn" url={linkedIn} />
                          )}
                        </>
                      </TitledTrainerSection>
                    </div>
                  </BasicInfoContainer>
                </TrainerDetailsWrap>
              </BigColumn>
              <div className="displayMdUp">
                <Column>
                  <Subtitle>Pricing</Subtitle>
                  <PricingSection />
                  {/* <Subtitle>Next Classes</Subtitle>
                   <ClassDetailsBookBox
                      BookClass={null}
                      nextSessions={bookingSlots}
                      onDetailsClick={null}
                    /> */}
                </Column>
              </div>
            </ColumnsWrapper>
            <div className="displayMobile">
              <ColumnsWrapper>
                <Column>
                  <TrainerProfileMobile
                    pricings={pricings}
                    instagram={instagram}
                    facebook={facebook}
                    linkedIn={linkedIn}
                    twitter={twitter}
                    certificates={certificates}
                    preferredTraineePersonality={preferredTraineePersonality}
                    preferredAgeGroup={preferredAgeGroup}
                    instructionType={instructionType}
                    classType={classType}
                    personality={personality}
                  />
                </Column>
              </ColumnsWrapper>
            </div>
          </CenteredContent>
        </TrainerInfoWrapper>
      </StyledContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const API_URL = 'https://dev-api.myjijo.com/api/v1';
  const { username } = params;
  const res = await fetch(`${API_URL}/trainer/${username}`);
  let data = await res.json();

  const resNextSessions = await fetch(
    `${API_URL}/trainee/trainer/${username}/sessions?isScoreRequired=false`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3OTZiYzJmYy1iZDZjLTQ1YzMtOWU1Yy1mYjFiNGZjZjYzNjYiLCJuYW1laWQiOiI4OSIsImVtYWlsIjoid3RvbGVkbytjbGllbnRlMTFAbXlqaWpvLmNvbSIsImdpdmVuX25hbWUiOiJ3dG9sZWRvIGNsaWVudCIsImZhbWlseV9uYW1lIjoidG9sbCIsImlzSW5zdGFudENsYXNzRmVhdHVyZUVuYWJsZWQiOiJGYWxzZSIsImF1dGhtZXRob2QiOiJwYXNzd29yZCIsInJvbGUiOiJDbGllbnQiLCJuYmYiOjE2MjU1NzM1OTksImV4cCI6MTYyNjAwNTU5OSwiaWF0IjoxNjI1NTczNTk5LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.c-f7M154irI9OGHpkLI2-qk4oKwH1Bw_m_cWNSKsvJ4',
      },
    },
  );
  const nextSessions = await resNextSessions.json();

  console.log('nextSessions ssr ', nextSessions);

  data = {
    result: {
      id: 212,
      name: 'William Toledo',
      trainerSince: 'Mar 19 2005',
      joinDate: 'Apr 5 2021',
      state: 'OH',
      stateName: 'Ohio',
      bio:
        "For over 22 years I have acquired all the training and the tools needed to specialize in empowering active aging women and men (50+) to feel safe, healthy and strong. Are you ready to overcome your fitness and health challenges? It's totally possible! Work with me and you will increase your stamina, flexibility, mobility, stability, and strength. I will guide you to improve your confidence and commitment to living a more vibrant and",
      facebook: 'https://www.facebook.com/fitness123',
      status: 'Active',
      genderId: 2,
      profileImage: {
        url:
          'https://dev-myjijo-images.s3.amazonaws.com/212/b25ecccf-5af6-499c-a766-fbeca155a30c.jpg',
      },
      preferredAgeGroup: ['18+', '50+'],
      personality: ['coachable', 'efficient', 'friendly'],
      instructionType: ['Group', 'Private training'],
      classType: ['Boxing', 'Cardio'],
      preferredTraineePersonality: ['Efficient', 'Focused'],
      certificates: [
        {
          id: '2222',
          certificateNumber: 'WORG | 22222',
          name: 'ACE',
          logoUrl: 'https://myjijo-icons.s3.amazonaws.com/certificates/ace.svg',
        },
        {
          id: '3333',
          certificateNumber: 'WORG | 3333',
          name: 'WORG',
          logoUrl: 'https://myjijo-icons.s3.amazonaws.com/certificates/ace.svg',
        },
      ],
      pricings: [
        {
          name: 'perClass',
          value: 100,
          instructionTypeId: 'Private training pricing',
        },
        {
          name: 'five pack',
          value: 495,
          instructionTypeId: 'Private training pricing',
        },
        {
          name: 'ten pack',
          value: 990,
          instructionTypeId: 'Private training pricing',
        },
        {
          name: 'perClass',
          value: 50,
          instructionTypeId: 'Group training pricing',
        },
        {
          name: 'five pack',
          value: 250,
          instructionTypeId: 'Group training pricing',
        },
        {
          name: 'ten pack',
          value: 500,
          instructionTypeId: 'Group training pricing',
        },
      ],
    },
    correlationId: 'd4405480-1cff-4345-a345-37f5fb7275b3',
    succeeded: true,
    message: 'Success.',
    serverTime: '2021-07-02T13:23:17Z',
  };

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data.result,
      nextSessions,
    },
  };
};

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  padding: 24px;
  width: 100%;
  display: flex;
  ${CenteredCss}
`;

const IconWrapper = styled.a`
  transition: opacity 0.5s ease-in-out;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

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
  margin-right: 24px;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 39px;
`;

const TrainerDetailsWrap = styled.div`
  margin-right: 0;
  @media (max-width: 599px) {
    margin-right: 24px;
  }
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
  text-align: justify;
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

const Subtitle = styled.div`
  font-size: 24px;
  margin: 15px 0px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export default TrainerProfile;
