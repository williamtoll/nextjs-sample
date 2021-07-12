export type ImageType = {
  id: number;
  url: string;
};

export type Program = {
  id?: number;
  name?: string;
  playlistId?: number;
  bookingSlotId?: number;
  sections: ProgramSection[];
};

export type ProgramSection = {
  id?: number;
  programId?: number;
  name?: string;
  duration?: number;
  order?: number;
  moves: ProgramMove[];
  restDuration?: number;
};

export type ProgramMove = {
  id?: number;
  sectionId?: number;
  name?: string;
  duration?: number;
  equipmentIds: number[];
  order?: number;
};

export type CalendarEvent = {
  id?: number;
  name: string;
  trainerId: number;
  classTime: string;
  bookingId: number;
  classId?: number;
  availability: string;
  className: string;
  instructionName: string;
  level: string;
  musicGenre: string[];
  classTypes: string[];
  equipments: string[];
  numberOfparticipants: number;
  durationInMinutes: number;
  programs: Program;
  numberOfParticipants?: number;
  instructionType: number;
  startTime: Date;
  endTime: Date;
};

export type TrainerCertificate = {
  id: number;
  name: string;
  certificateNumber?: string;
  logoUrl?: string;
  verifyUrl?: string;
  websiteUrl?: string;
};

export type CartItem = {
  label: string;
  isSubscription: boolean;
  price: number;
};

export type Image = {
  url: string;
};
export type Trainer = {
  id: number;
  firstname: string;
  lastname: string;
};
export type ClassInfo = {
  name: string;
  image: Image;
  trainer: Trainer;
  durationInMinutes: number;
  instructionTypeId: number;
  description: string;
  equipmentIds: number[];
  availability: string;
  level: string;
};

export enum ClassLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Expert = 'Advanced',
  AllLevels = 'AllLevels',
}

export const ClassLevelLabels = {
  [ClassLevel.Beginner]: 'Beginner',
  [ClassLevel.Intermediate]: 'Intermediate',
  [ClassLevel.Expert]: 'Advanced',
  [ClassLevel.AllLevels]: 'All Levels',
};

export enum ClassAvailability {
  Open = 'Open',
  InviteOnly = 'InviteOnly',
}

export const ClassAvailabilityLabels = {
  [ClassAvailability.Open]: 'Open to Everyone',
  [ClassAvailability.InviteOnly]: 'Invite only',
};
