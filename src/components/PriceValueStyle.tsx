import styled from 'styled-components';

export const PricingContainer = styled.div<{ disabled: boolean; selected: boolean }>`
  box-sizing: border-box;
  height: 70px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: ${({ disabled }) => (disabled ? 'center' : 'flex-start')};
  padding: 10px;
  cursor: pointer;
  min-width: 104px;
  border-radius: 7px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.lighterPurple : theme.colors.white};
  border: 2px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.lighterPurple};
  &:hover {
    border: 2px solid
      ${({ theme, disabled }) =>
        disabled ? theme.colors.lighterPurple : theme.colors.primary};
  }
  @media (max-width: 600px) {
    height: 36px;
    flex-direction: row;
    width: 100%;
    padding: 8px 8px;
    align-items: center;
  }
`;

export const ValueContainer = styled.div`
  width: 100%;
  text-align: left;
  align-items: center;
  display: flex;
  @media (max-width: 600px) {
    margin-left: 9px;
    margin-bottom: 0;
  }
`;

export const EmptyLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
  white-space: pre;
  text-align: center;
  font-size: 13px;
  ${({ theme }) => theme.mediaQueries.medium} {
    width: fit-content;
    margin-bottom: 8px;
  }
`;

export const PricingLabel = styled.span`
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.02em;
  @media (max-width: 600px) {
    flex: 1 0 52px;
  }
`;

export const PricingLabelSuscription = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  font-size: 13px;
  @media (max-width: 600px) {
    margin-left: 5px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  @media (max-width: 600px) {
    right: 10px;
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

export const EmptySpace = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;
export const NumberPrice = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #4c33c3;
`;
