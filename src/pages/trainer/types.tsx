export type ImageType = {
  id: number;
  url: string;
};

export type CalendarEvent = {
  id?: number;
  name: string;
  classId?: number;
  type: string;
  start: Date;
  end: Date;
  startTime?: Date;
  endTime?: Date;
  startTimeRender?: Date;
  endTimeRender?: Date;
  waitingRoomDuration?: number;
  frequency?: string;
  durationInMinutes?: number;
  numberOfParticipants?: number;
  participantIds?: number[];
  showDetails?: boolean;
  showStatus?: boolean;
  status?: string;
  programId?: number;
  primary?: boolean;
  hideExtraTime?: boolean;
  hideFrequency?: boolean;
  isInviteOnly: boolean;
  instructionType:{
    id: number;
    name: string;
  }
};

export type TrainerCertificate = {
  id: number;
  name: string;
  certificateNumber?: string;
  logoUrl?: string;
  verifyUrl?: string;
  websiteUrl?: string;
};
