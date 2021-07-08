import React from 'react';
import styled from 'styled-components';
import PriceValue from './PriceValue';

const PricingSection: React.FC = () => {
  const cartData = [
    {
      id: 375,
      instructionTypeId: 2,
      items: [
        {
          id: '375-2-single',
          label: 'Per class',
          quantity: 1,
          price: 100,
          instructionTypeId: 2,
          isSubscription: false,
        },
        {
          id: '375-2-5pack',
          label: '5 pack',
          quantity: 5,
          instructionTypeId: 2,
          price: 480,
          isSubscription: false,
        },
        {
          id: '375-2-10pack',
          label: '10 pack',
          quantity: 10,
          instructionTypeId: 2,
          price: 940,
          isSubscription: false,
        },
        {
          id: '375-2-subscription',
          label: 'Subscription',
          quantity: 1,
          price: 0,
          instructionTypeId: 2,
          isSubscription: false,
        },
      ],
    },
    {
      id: 376,
      instructionTypeId: 1,
      items: [
        {
          id: '376-1-single',
          label: 'Per class',
          quantity: 1,
          price: 15,
          instructionTypeId: 1,
          isSubscription: false,
        },
        {
          id: '376-1-5pack',
          label: '5 pack',
          quantity: 5,
          instructionTypeId: 1,
          price: 72,
          isSubscription: false,
        },
        {
          id: '376-1-10pack',
          label: '10 pack',
          quantity: 10,
          instructionTypeId: 1,
          price: 141,
          isSubscription: false,
        },
        {
          id: '376-1-subscription',
          label: 'Subscription',
          quantity: 1,
          price: 50,
          instructionTypeId: 1,
          isSubscription: true,
        },
      ],
    },
  ];

  return (
    <Container>
      <PricingsContainer>
        {cartData.map((pricing) => (
          <React.Fragment key={pricing.id.toString()}>
            <PriceHeader>
              <InstructionTypeLabel noMargin>Pricing</InstructionTypeLabel>
            </PriceHeader>

            <PricingGroup>
              {pricing.items.map((item) => {
                return (
                  <PriceValue key={item.id} cartItem={item} isSelected={null} />
                );
              })}
            </PricingGroup>
          </React.Fragment>
        ))}

        <ButtonItemBox>
          <ButtonItem onClick={null}>
            <ButtonItemText>Purchase</ButtonItemText>
          </ButtonItem>
        </ButtonItemBox>
      </PricingsContainer>
    </Container>
  );
};

const PriceHeader = styled.div`
  margin-top: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const ButtonItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10px;
`;

const ButtonItemText = styled.div`
  @media screen and (min-width: 1200px) {
    text-transform: capitalize;
    font-size: 16px;
    display: block;
    margin-right: 4px;
  }
`;

const ButtonItem = styled.div`
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

const PricingsContainer = styled.div<{ isLast?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: ${({ theme }) => theme.colors.lighterPurple};
  border-radius: 0.2rem;
`;

const PricingGroup = styled.div`
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

const InstructionTypeLabel = styled.h5`
  font-size: 17px;
  text-align: left;
  font-weight: 700;
`;

export default PricingSection;
