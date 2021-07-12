import React, { useCallback } from 'react';
import { ClassDetailsBookBox } from '../components/ClassDetailsBookBox';
import { CertificateItemProf } from '../components/ClientCertificate';
import PricingSection from '../components/PricingSection';
import { SocialMediaItem } from '../components/SocialMediaItem';
import TitledTrainerSection from '../components/TitledTrainerSection';
import { TrainerCertificate } from 'shared/types';
import * as CertificateUtils from '../utils/certificate';
import { useEffect } from 'react';
import {
  StyleAppBar,
  StyledLink,
  StyledTab,
  TabPanel,
  RightTitles,
  NextClassesTitle,
} from './TrainerProfileStyles';

type Props = {
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

export default TrainerProfile;
