import { CheckedIconCircle } from 'images/CheckedIconCircle';
import React from 'react';
import styled from 'styled-components';
import { Certificate } from '../types';

type Props = {
  certificate: Certificate;
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

const CertContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 180px;
  height: 150px;
  border: 2px solid #efefef;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const CertificateData=styled.div`
  display: flex;
  justift-content: space-between;
`;

const CertificateNumberText = styled.span`
  position: absolute;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  top: 30px;
  left: 16px;
`;
const CertificateName = styled.span`
  position: absolute;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  top: 10px;
  left: 16px;
`;

const Image = styled.img`
  width: 60%;
  height: auto;
`;

const ImageOther = styled.img`
  width: 45%;
  height: auto;
`;

const CertificateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  padding-right: 10px;
  padding-top: 10px;
`;

const OtherCertificate = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;
