import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ClassDetailsBookBox } from '../components/ClassDetailsBookBox';
import { CertificateItemProf } from '../components/ClientCertificate';
import PricingSection from '../components/PricingSection';
import { SocialMediaItem } from '../components/SocialMediaItem';
import TitledTrainerSection from '../components/TitledTrainerSection';
import { TrainerCertificate } from 'shared/types';
import * as CertificateUtils from '../utils/certificate';
import { useEffect } from 'react';

type Props = {
  pricings: Object;
  instagram: string;
  facebook: string;
  linkedIn: string;
  twitter: string;
  certificates: TrainerCertificate[];
  preferredTraineePersonality: string[];
  preferredAgeGroup: string[];
  instructionType: string[];
  classType: string[];
  personality: string[];
};

const TrainerProfile: React.FC<Props> = ({
  pricings,
  instagram,
  facebook,
  linkedIn,
  twitter,
  certificates,
  preferredTraineePersonality,
  preferredAgeGroup,
  instructionType,
  classType,
  personality,
}) => {
  const openTab = useCallback((evt, tabName) => {
    let i;
    const tabContent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].setAttribute('style', 'display: none');
    }
    const tabLinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    if (evt) evt.currentTarget.className += ' active';
  }, []);

  useEffect(() => {
    openTab(undefined, 'profile');
  }, []);

  return (
    <>
      <StyleAppBar>
        <StyledLink>
          <StyledTab
            label="Trainer"
            onClick={(event) => openTab(event, 'profile')}
          >
            Trainer
          </StyledTab>
          <StyledTab
            label="Prices"
            onClick={(event) => openTab(event, 'prices')}
          >
            Prices
          </StyledTab>
          <StyledTab
            label="Classes"
            onClick={(event) => openTab(event, 'classes')}
          >
            Classes
          </StyledTab>
          <StyledTab
            label="Credentials"
            onClick={(event) => openTab(event, 'credentials')}
          >
            {' '}
            Credentials
          </StyledTab>
        </StyledLink>
      </StyleAppBar>
      <TabPanel
        style={{ display: 'block' }}
        id="profile"
        className="tabcontent"
      >
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
        <TitledTrainerSection title="Class Types" values={classType} />
        <TitledTrainerSection title="Training Style" values={personality} />

        <TitledTrainerSection title="Social Media">
          <>
            {!!instagram && (
              <SocialMediaItem type="instagram" url={instagram} />
            )}
            {!!facebook && <SocialMediaItem type="facebook" url={facebook} />}
            {!!twitter && <SocialMediaItem type="twitter" url={twitter} />}
            {!!linkedIn && <SocialMediaItem type="linkedIn" url={linkedIn} />}
          </>
        </TitledTrainerSection>
      </TabPanel>
      <TabPanel id="prices" className="tabcontent">
        <RightTitles>Prices</RightTitles>
        <PricingSection />
      </TabPanel>
      <TabPanel id="classes" className="tabcontent">
        <>
          <NextClassesTitle>Next Classes</NextClassesTitle>
          <ClassDetailsBookBox
            BookClass={null}
            nextSessions={[]}
            onDetailsClick={null}
          />
        </>
      </TabPanel>
      <TabPanel id="credentials" className="tabcontent">
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
      </TabPanel>
    </>
  );
};

const TabPanel = styled.div`
  width: 100%;
  display: none;
  padding: 8px;
`;

const StyleAppBar = styled.div`
  display: flex;
  flex-direction: row !important;
  scrollbar-width: none;
  color: #4c33c3 !important;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  box-shadow: none !important;
`;

const StyledLink = styled.div`
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

const StyledTab = styled.button`
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

const RightTitles = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin: 15px 0px;
`;

const NextClassesTitle = styled.div`
  font-size: 24px;
  margin: 15px 0px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export default TrainerProfile;
