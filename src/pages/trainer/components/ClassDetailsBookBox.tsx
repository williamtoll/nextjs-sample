import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import * as DateUtils from '../../../utils/date';
import { usePagination } from 'utils/usePagination';
import { Pagination } from './Pagination';
import { GroupIcon } from 'images/GroupIcon';
import { PersonIcon } from 'images/PersonIcon';
import { CalendarEvent } from '../types';
import { InstructionType } from 'shared/constants';

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
          event?.instructionType?.id === InstructionType.Group
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
                    {event.participantIds.length} Participants
                    <ViewDetails onClick={() => onDetailsClick(null)}>
                      Click to View Details
                    </ViewDetails>
                  </Participant>

                  <FooterButtons>
                    <TypeButtons>
                      <TrainingTypeIcon />
                      {event?.instructionType?.id === InstructionType.Group ? (
                        <GroupTitle>GROUP</GroupTitle>
                      ) : (
                        <GroupTitle>PRIVATE</GroupTitle>
                      )}
                    </TypeButtons>
                    <OpenButtons>
                      {!event?.isInviteOnly ? (
                        <GroupTitle>OPEN TO EVERYONE</GroupTitle>
                      ) : (
                        <GroupTitle>INVITE ONLY</GroupTitle>
                      )}
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

const BoxPurple = styled.div`
  background: ${({ theme }) => theme.colors.lighterPurple};
  padding: 15px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 404px) {
    padding: 10px;
  }
`;
const Participant = styled.div`
  margin-top: 5px;
  color: #3c2b71;
  opacity: 50%;
  font-weight: 400;
  font-size: 12px;
`;

const BlueButton = styled.button<{ bgDisable: boolean }>`
  position: relative;
  grid-area: cancel;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 7px;
  width: 84px;
  border: none;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  background-color: ${({ theme, bgDisable }) =>
    bgDisable ? '#cccccc' : theme.colors.primary};
  border-radius: 2px;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
`;
const BookedButtons = styled.div`
  display: grid;
  grid-template-columns: 22px 84px;
  grid-template-rows: 27px 27px;
  grid-gap: 8px;
  grid-template-areas:
    'calendar booked'
    '. cancel';
  .MuiSvgIcon-root {
    width: 19px;
    height: 19px;
  }
  @media (min-width: 1160px) {
    grid-template-columns: 50px 84px 84px;
    grid-template-rows: 27px;
    grid-template-areas: 'calendar booked cancel';
  }
`;

const TypeButtons = styled.div`
  background-color: #08003a;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  padding: 5px 9px;
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  @media (max-width: 460px) {
    font-size: 10px;
    margin-left: 3px;
    padding: 2px 4px;
  }
  align-items: center;
  .MuiSvgIcon-root {
    width: 17px;
    height: 17px;
    @media (max-width: 460px) {
      width: 15px;
      height: 15px;
    }
  }
`;

const GroupTitle = styled.div`
  margin-left: 3px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  @media (max-width: 460px) {
    font-size: 10px;
    margin-left: 2px;
    letter-spacing: 1px;
  }
  @media (max-width: 360px) {
    font-size: 8px;
  }
`;
const OpenButtons = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.Black};
  border-radius: 40px;
  font-size: 11px;
  padding: 5px 9px;
  margin-left: 4px;
  margin-top: 7px;
  display: flex;
  align-items: center;
  @media (max-width: 460px) {
    font-size: 9px;
    margin-left: 3px;
    padding: 2px 4px;
  }
`;

const ViewDetails = styled.div`
  display: inline-block;
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
`;

const FooterButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleEvent = styled.div`
  color: #3c2b71;
  font-weight: 700;
  margin-bottom: 3px;
  font-size: 20px;
`;

const LinkBox = styled.div`
  cursor: pointer;
  fontFamily: "Mukta"
  fontWeight:"700"
  color:"#3c2b71"
`;

const DateTitle = styled.div`
  color: #3c2b71;
  white-space: nowrap;
  font-size: 10px;
  @media (min-width: 600px) {
    font-size: 12px;
  }
`;

const TimeZoneBox = styled.div`
  display: 'flex';
  alignitems: 'center';
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainContainer = styled.div<{ isFirst: boolean }>`
  margin-top: ${({ isFirst }) => (isFirst ? '0px' : '25px')};
`;
