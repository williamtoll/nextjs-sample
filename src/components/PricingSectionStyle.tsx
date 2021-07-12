import styled from 'styled-components';

export const PriceHeader = styled.div`
  margin-top: 8px;
`;

export const ButtonItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10px;
`;

export const ButtonItemText = styled.div`
  @media screen and (min-width: 1200px) {
    text-transform: capitalize;
    font-size: 16px;
    display: block;
    margin-right: 4px;
  }
`;

export const ButtonItem = styled.div`
  width: 100%;
  background-color: #4c33c3;
  color: #ffffff;
  border: none;
  border-radius: 7px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: hover 1s;
  width: 100%;
  height: 30px;
  &:hover {
    background-color: lighten(#4c33c3, 20);
  }
  @media screen and (min-width: 1200px) {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn__item-text {
      font-size: 1rem;
      display: block;
      margin-right: 4px;
    }
  }
`;

export const PricingsContainer = styled.div<{ isLast?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: ${({ theme }) => theme.colors.lighterPurple};
  border-radius: 0.2rem;
`;

export const PricingGroup = styled.div`
  margin-top: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 70px;
  column-gap: 8px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 599px) {
    flex-wrap: nowrap;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 35px 35px;
    column-gap: 16px;
    row-gap: 8px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 35px 35px;
    column-gap: 16px;
    row-gap: 8px;
  }
  @media (max-width: 450px) {
    column-gap: 1px;
  }
`;

export const InstructionTypeLabel = styled.h5`
  font-size: 17px;
  text-align: left;
  font-weight: 700;
`;