import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.space.xsmall} 0;
`;

export const LabelText = styled.span`
  color: ${({ theme }) => theme.jijo.colors.textLight};
`;

export const EquipmentImage = styled.img<{ withSpace: boolean }>`
  max-height: 20px;
  width: auto;
  margin: 0 ${({ theme }) => theme.space.xsmall} 0
    ${({ theme, withSpace }) => (withSpace ? theme.space.small : 0)};
`;

export const EquipmentName = styled.span<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
`;
