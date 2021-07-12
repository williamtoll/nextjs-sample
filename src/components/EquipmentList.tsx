import React from 'react';
import { useState } from 'react';
import {
  List,
  ListItem,
  EquipmentImage,
  EquipmentName,
} from './EquipmentStyles';
import { LabelText } from './LabeledInfoStyles';

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
  const [equipmentMap] = useState([]);

  if (!equipmentIds || equipmentIds.length === 0) return null;

  return (
    <List>
      {showLabel ? <LabelText>Req&apos;d Equipment: </LabelText> : null}
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
