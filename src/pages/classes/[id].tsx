import ClassImage from '@components/ClassImage';
import { EquipmentList } from '@components/EquipmentList';
import LabeledInfoValues from '@components/LabeledInfoValues';
import React from 'react';
import { InstructionType } from 'shared/enums';
import { Routes } from 'shared/routes';
import {
  ClassAvailabilityLabels,
  ClassInfo,
  ClassLevelLabels,
} from 'shared/types';
import {
  PageContainer,
  BoxClassDetail,
  BoxClassInfo,
  BoxClassTitle,
  ChipContain,
  ChipContainer,
  ChipContainResponsive,
  ClassContainer,
  ClassDetailBox,
  ClassDetailsBox,
  ClassNameLabel,
  DetailsLongText,
  DurationLabel,
  GridContainer,
  ImageContainer,
  StyledBox,
  TitleClassDetails,
  TrainerInfo,
  TrainerName,
} from 'styles/ClassesStyles';

import { NextRouter } from 'next/router';
import { JijoIcon } from 'images/JijoIcon';
import { IconWrapper } from 'styles/TrainerProfileStyles';
import { HeaderWrapper, StyledContainer } from 'styles/GlobalStyles';

export interface Props {
  classInfo: ClassInfo;
  router: NextRouter;
}

const ClassDetail: React.FC<Props> = ({ classInfo, router }) => {
  const navigateToTrainerProfilePage = () => {
    router.push({
      pathname: `${Routes.Trainer}`,
      query: { id: `${classInfo?.trainer.id}` },
    });
  };

  const instructionTypeLabel =
    classInfo?.instructionTypeId === InstructionType.Group
      ? 'Group'
      : 'Private';

  return (
    <>
      <StyledContainer>
        <HeaderWrapper>
          <IconWrapper href={'https://myjijo.com'}>
            <JijoIcon />
          </IconWrapper>
        </HeaderWrapper>
        <PageContainer>
          <GridContainer>
            <ClassDetailBox>
              <StyledBox>
                <StyledBox>
                  <ImageContainer>
                    <ClassImage imageSource={classInfo?.image?.url} />
                  </ImageContainer>
                </StyledBox>
                <ClassContainer>
                  <ClassNameLabel>{classInfo?.name}</ClassNameLabel>
                  <TrainerInfo>
                    <TrainerName
                      onClick={() => {
                        navigateToTrainerProfilePage();
                      }}
                    >
                      {classInfo?.trainer.firstname}{' '}
                      {classInfo?.trainer.lastname}
                    </TrainerName>
                  </TrainerInfo>
                  <ChipContain>
                    {classInfo?.durationInMinutes > 0 && (
                      <>
                        <ChipContainer>
                          <DurationLabel>{`${classInfo?.durationInMinutes} min`}</DurationLabel>
                        </ChipContainer>
                      </>
                    )}
                  </ChipContain>
                </ClassContainer>
              </StyledBox>
              <ChipContainResponsive>
                {classInfo?.durationInMinutes > 0 && (
                  <>
                    <ChipContainer>
                      <DurationLabel>{`${classInfo?.durationInMinutes} min`}</DurationLabel>
                    </ChipContainer>
                    <ChipContainer>
                      <DurationLabel>
                        {classInfo?.instructionTypeId
                          ? InstructionType[classInfo.instructionTypeId]
                          : ''}
                      </DurationLabel>
                    </ChipContainer>
                  </>
                )}
              </ChipContainResponsive>
              <ClassDetailsBox>
                <BoxClassTitle paddingRight="20px" paddingTop="20px">
                  <TitleClassDetails>CLASS DETAILS</TitleClassDetails>
                  <DetailsLongText>{classInfo?.description}</DetailsLongText>
                </BoxClassTitle>
                <BoxClassDetail>
                  <BoxClassInfo marginTop="15px">
                    <LabeledInfoValues
                      label="Instruction Type: "
                      names={[instructionTypeLabel] || []}
                    />
                  </BoxClassInfo>
                  <BoxClassInfo marginTop="15px">
                    <LabeledInfoValues label="Class Types: " names={[]} />
                  </BoxClassInfo>
                  <BoxClassInfo marginTop="15px">
                    <LabeledInfoValues
                      label="Availability: "
                      names={
                        classInfo?.availability
                          ? [ClassAvailabilityLabels[classInfo?.availability]]
                          : []
                      }
                    />
                  </BoxClassInfo>
                  <BoxClassInfo marginTop="15px">
                    <LabeledInfoValues
                      label="Level: "
                      names={
                        classInfo?.level
                          ? [ClassLevelLabels[classInfo?.level]]
                          : []
                      }
                    />
                  </BoxClassInfo>
                  <BoxClassInfo marginTop="15px">
                    <EquipmentList equipmentIds={classInfo?.equipmentIds} />
                  </BoxClassInfo>
                  <BoxClassInfo marginTop="15px">
                    <LabeledInfoValues label="Music Genres: " names={[]} />
                  </BoxClassInfo>
                </BoxClassDetail>
              </ClassDetailsBox>
            </ClassDetailBox>
          </GridContainer>
        </PageContainer>
      </StyledContainer>
    </>
  );
};

export default ClassDetail;
