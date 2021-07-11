import React from 'react';
import moment from 'moment';
import * as DateUtils from '../utils/date';
import { usePagination } from 'utils/usePagination';
import { Pagination } from './Pagination';
import { GroupIcon } from 'images/GroupIcon';
import { PersonIcon } from 'images/PersonIcon';
import { CalendarEvent } from 'shared/types';
import { InstructionType } from 'shared/enums';
import {
  BlueButton,
  BookedButtons,
  BoxContainer,
  BoxPurple,
  DateTitle,
  FooterButtons,
  GroupTitle,
  LinkBox,
  MainContainer,
  OpenButtons,
  Participant,
  TimeZoneBox,
  TitleEvent,
  TypeButtons,
  ViewDetails,
} from './ClassDetailStyles';

type Props = {
  nextSessions: CalendarEvent[];
  BookClass: (event: Event) => void;
  onDetailsClick: (event: Event) => void;
};

export const ClassDetailsBookBox: React.FC<Props> = ({
  nextSessions,
  BookClass,
  onDetailsClick,
}) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  console.log('booking slots ', nextSessions);

  const {
    pageSize,
    setPageSize,
    pageIndex,
    maxPages,
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    view,
  } = usePagination(nextSessions);

  return (
    <>
      <Pagination
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        maxPages={maxPages}
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
      />

      {view.map((event, i, array) => {
        const TrainingTypeIcon =
          event?.instructionType === InstructionType.Group
            ? GroupIcon
            : PersonIcon;

        const sameDayBefore = DateUtils.isSameDay(
          array[i - 1]?.startTime,
          event.startTime,
          timeZone,
        );

        const today = DateUtils.isSameDay(
          moment.utc(),
          event?.startTime,
          timeZone,
        );

        return (
          <>
            <MainContainer isFirst={i === 0 ? true : false}>
              {today && i === 0 ? (
                <TitleEvent>Today</TitleEvent>
              ) : (
                <>
                  {(!sameDayBefore || i === 0) && (
                    <TitleEvent>
                      {DateUtils.formatCompleteNameAndDateTz(
                        event.startTime,
                        timeZone,
                      )}
                    </TitleEvent>
                  )}
                </>
              )}

              <BoxPurple>
                <div>
                  <LinkBox onClick={null}>{event?.name}</LinkBox>
                  <TimeZoneBox>
                    <DateTitle>
                      {DateUtils.formatDatePeriodWithTimeZone(
                        event.startTime,
                        event.endTime,
                        timeZone,
                      )}
                    </DateTitle>
                  </TimeZoneBox>
                  <Participant>
                    {event.numberOfParticipants} Participants
                    <ViewDetails onClick={() => onDetailsClick(null)}>
                      Click to View Details
                    </ViewDetails>
                  </Participant>

                  <FooterButtons>
                    <TypeButtons>
                      <TrainingTypeIcon />
                      {event?.instructionType === InstructionType.Group ? (
                        <GroupTitle>GROUP</GroupTitle>
                      ) : (
                        <GroupTitle>PRIVATE</GroupTitle>
                      )}
                    </TypeButtons>
                    <OpenButtons>
                      <GroupTitle>OPEN TO EVERYONE</GroupTitle>
                    </OpenButtons>
                  </FooterButtons>
                </div>

                <BoxContainer>
                  <div>
                    <BookedButtons>
                      <>
                        <BlueButton onClick={() => BookClass(null)}>
                          Book
                        </BlueButton>
                      </>
                    </BookedButtons>
                  </div>
                </BoxContainer>
              </BoxPurple>
            </MainContainer>
          </>
        );
      })}
    </>
  );
};

export default ClassDetailsBookBox;
