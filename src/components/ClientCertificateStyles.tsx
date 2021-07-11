import styled from 'styled-components';

export const CertContainer = styled.div`
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

export const CertificateData = styled.div`
  display: flex;
  justift-content: space-between;
`;

export const CertificateNumberText = styled.span`
  position: absolute;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  top: 30px;
  left: 16px;
`;
export const CertificateName = styled.span`
  position: absolute;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  top: 10px;
  left: 16px;
`;

export const Image = styled.img`
  width: 60%;
  height: auto;
`;

export const ImageOther = styled.img`
  width: 45%;
  height: auto;
`;

export const CertificateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  padding-right: 10px;
  padding-top: 10px;
`;

export const OtherCertificate = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;
