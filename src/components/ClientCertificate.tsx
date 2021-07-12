import { CheckedIconCircle } from 'images/CheckedIconCircle';
import React from 'react';
import { TrainerCertificate } from 'shared/types';
import {
  CertContainer,
  CertificateData,
  CertificateContainer,
  CertificateName,
  CertificateNumberText,
  IconContainer,
  OtherCertificate,
  ImageOther,
} from './ClientCertificateStyles';

type Props = {
  certificate: TrainerCertificate;
  certificateNumber: string | undefined;
};
export const CertificateItemProf: React.FC<Props> = ({
  certificate,
  certificateNumber,
}) => {
  return (
    <CertContainer>
      <CertificateData>
        <CertificateContainer>
          <CertificateName noMargin>{certificate.name}</CertificateName>
          <CertificateNumberText>ID: {certificateNumber}</CertificateNumberText>
        </CertificateContainer>
        <IconContainer>
          <CheckedIconCircle />
        </IconContainer>
      </CertificateData>

      <OtherCertificate>
        {certificate.id !== 18 && <Image src={certificate.logoUrl} />}

        {certificate.id === 18 && <ImageOther src={certificate.logoUrl} />}
      </OtherCertificate>
    </CertContainer>
  );
};

export default CertificateItemProf;
