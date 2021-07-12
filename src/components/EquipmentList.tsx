import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';
import { API_URL } from '../shared/constants';

const List = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.space.xsmall} 0;
`;

const LabelText = styled.span`
  color: ${({ theme }) => theme.jijo.colors.textLight};
`;

const EquipmentImage = styled.img<{ withSpace: boolean }>`
  max-height: 20px;
  width: auto;
  margin: 0 ${({ theme }) => theme.space.xsmall} 0
    ${({ theme, withSpace }) => (withSpace ? theme.space.small : 0)};
`;

const EquipmentName = styled.span<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
`;

type Props = {
  showLabel?: boolean;
  bold?: boolean;
  withSpace?: boolean;
  equipmentIds: number[];
};

export const EquipmentList: React.FC<Props> = ({
  showLabel = true,
  bold,
  withSpace = true,
  equipmentIds,
}) => {
  const [equipmentMap, setEquipmentMap] = useState([]);

  const getEquipment = useCallback(async () => {
    const res = await fetch(`${API_URL}/equipment-lookup`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNGNkYWE1ZC04NWNkLTQ2OWUtOGYxOS1kNjMzNDg2YTkwZTEiLCJuYW1laWQiOiI4OSIsImVtYWlsIjoid3RvbGVkbytjbGllbnRlMTFAbXlqaWpvLmNvbSIsImdpdmVuX25hbWUiOiJ3dG9sZWRvIGNsaWVudCIsImZhbWlseV9uYW1lIjoidG9sbCIsImlzSW5zdGFudENsYXNzRmVhdHVyZUVuYWJsZWQiOiJGYWxzZSIsImF1dGhtZXRob2QiOiJwYXNzd29yZCIsInJvbGUiOiJDbGllbnQiLCJuYmYiOjE2MjYwOTQ4NTQsImV4cCI6MTYyNjUyNjg1NCwiaWF0IjoxNjI2MDk0ODU0LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.QyAMgicDWVi2LP8Y0dP2-HayQhqyRKSXIOhwHbgk87Q',
      },
    });
    const data = await res.json();
    console.log('data ', data);
    if (data) setEquipmentMap(data);
  }, []);

  if (!equipmentIds || equipmentIds.length === 0) return null;

  return (
    <List>
      {showLabel ? <LabelText>Req'd Equipment: </LabelText> : null}
      {equipmentIds.map((id) => (
        <ListItem key={equipmentMap[id].id}>
          <EquipmentImage
            withSpace={withSpace}
            alt={equipmentMap[id].name}
            src={equipmentMap[id].iconUrl}
          />
          <EquipmentName bold={!!bold}>{equipmentMap[id].name}</EquipmentName>
        </ListItem>
      ))}
    </List>
  );
};
