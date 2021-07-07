/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TrainerCertificate } from 'pages/trainer/types';

export const getCertificateNumber = (
  certId: number,
  trainerCert: TrainerCertificate[],
) => {
  const showCertificate = trainerCert.find(
    (certArrObj) => certArrObj.id === certId,
  );
  return showCertificate?.certificateNumber;
};
