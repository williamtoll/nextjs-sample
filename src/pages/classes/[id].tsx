import React from 'react';
import styled from 'styled-components';

const ClassDetail: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <GridContainer>
          <StyledBox>
            <Box display="flex">
              <Box margin={0} display="flex" justifyContent="center">
                <ImageContainer>
                  <ClassImage imageSource={classInfo.image?.url} />
                </ImageContainer>
              </Box>
              <Box padding="20px" flexGrow="1">
                <ClassNameLabel>{classInfo.name}</ClassNameLabel>
                <Box
                  border="2px solid #f2f2f2"
                  borderRadius="6px"
                  padding="8px 10px"
                  marginTop={['10px', '20px']}
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  maxWidth="309px"
                >
                  <TrainerName
                    onClick={() => {
                      navigateToTrainerProfilePage();
                    }}
                  >
                    {classInfo?.trainer.firstname} {classInfo?.trainer.lastname}
                  </TrainerName>
                  <AddToFavoriteClass
                    onAddedToFavorites={onAddedToFavorites}
                    trainerId={classInfo?.trainer.id}
                  />
                </Box>
                <ChipContain>
                  {classInfo.durationInMinutes > 0 && (
                    <>
                      <ChipContainer>
                        <DurationLabel>{`${classInfo.durationInMinutes} min`}</DurationLabel>
                      </ChipContainer>
                    </>
                  )}
                </ChipContain>
              </Box>
            </Box>
            <ChipContainResponsive>
              {classInfo.durationInMinutes > 0 && (
                <>
                  <ChipContainer>
                    <DurationLabel>{`${classInfo.durationInMinutes} min`}</DurationLabel>
                  </ChipContainer>
                  <ChipContainer>
                    <DurationLabel>
                      {InstructionType[classInfo.instructionTypeId]}
                    </DurationLabel>
                  </ChipContainer>
                </>
              )}
            </ChipContainResponsive>
            <ClassDetailsBox>
              <Box paddingRight="20px" paddingTop="20px">
                <TitleClassDetails>CLASS DETAILS</TitleClassDetails>
                <DetailsLongText>{classInfo.description}</DetailsLongText>
              </Box>
              <Box
                paddingRight="20px"
                paddingTop="20px"
                display="flex"
                flexDirection="column"
              >
                <Box marginTop="15px">
                  <LabeledInfoValues
                    label="Instruction Type: "
                    names={[instructionTypeLabel]}
                  />
                </Box>
                <Box marginTop="15px">
                  <LabeledInfoValues
                    label="Class Types: "
                    names={classTypeNames}
                  />
                </Box>
                <Box marginTop="15px">
                  <LabeledInfoValues
                    label="Availability: "
                    names={[ClassAvailabilityLabels[classInfo.availability]]}
                  />
                </Box>
                <Box marginTop="15px">
                  <LabeledInfoValues
                    label="Level: "
                    names={[ClassLevelLabels[classInfo.level]]}
                  />
                </Box>
                <Box marginTop="15px">
                  <EquipmentList ids={classInfo.equipmentIds} />
                </Box>
                <Box marginTop="15px">
                  <LabeledInfoValues
                    label="Music Genres: "
                    names={musicGenresNames}
                  />
                </Box>
              </Box>
            </ClassDetailsBox>
          </Box>
          <Box display="flex" flexDirection="column">
            {hasSubscription ? (
              <Subscription autoRenewsDate={wallet?.subscriptionEndDate} />
            ) : (
              <ClassPricingResponsive
                trainerId={classInfo?.trainer.id}
                instructionTypeId={classInfo.instructionTypeId}
                balance={wallet?.balance}
                successRedirectUrl={successRedirectUrl}
              />
            )}

            <Box
              fontWeight="700"
              fontSize="12px"
              letterSpacing="2px"
              marginTop="32px"
            >
              NEXT SESSIONS
            </Box>
            {errors && errors.length > 0 ? (
              <Box marginY="16px">
                {errors.map((error) => (
                  <ErrorMessage key={error.message} message={error.message} />
                ))}
              </Box>
            ) : null}
            <ClassDetailsBookBox
              loadingBookButton={loadingBookButton}
              cancelBook={handleConfirmationClick}
              BookClass={handleAttendBookingSlot}
              traineeId={trainee?.id}
              classInfo={classInfo}
              canBook={canBook}
              timezone={trainee?.timeZone}
              addToCalendar={handleAddToCalendar}
              onDetailsClick={handleEventSelect}
            />

            <Box>
              {checkoutLoading && <StyledLoader />}

              {filteredFreebies.length > 0 && (
                <Box marginTop="20px">
                  <FreebiesSection
                    handleFreebieRedeem={handleFreebieRedeem}
                    freebies={filteredFreebies}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </GridContainer>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-rows: 100%;
  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const StyledBox = styled.div`
  display: 'flex';
  flexdirection: 'column';
`;

const ClassNameLabel = styled.div`
  margin: 0px 0px;
  font-size: 3.2rem;
  line-height: 3.2rem;
  @media (max-width: 650px) {
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
`;

const ImageContainer = styled.div`
  max-width: 276px;
  @media (max-width: 550px) {
    max-width: 200px;
  }
`;

const ChipContain = styled.div`
  margin-top: 20px;
  @media (max-width: 450px) {
    display: none;
  }
`;
const ChipContainResponsive = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 450px) {
    display: none;
  }
`;

const ChipContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lighterGrey};
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: inline-block;
  &:nth-child(2) {
    margin-left: 8px;
  }
  @media (max-width: 650px) {
    padding: 4px 12px;
  }
`;

const DurationLabel = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.DarkGrey};
`;

const ClassDetailsBox = styled.div`
  margin-bottom: 10px;
  @media (max-width: 376px) {
    display: none;
  }
`;

const TitleClassDetails = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

const DetailsLongText = styled.div`
  font-size: 17px;
  line-height: 22px;
  font-weight: 300;
`;



export default ClassDetail;
