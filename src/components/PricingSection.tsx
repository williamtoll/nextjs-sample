import { Container } from 'next/app';
import React from 'react';
import PriceValue from './PriceValue';
import {
  PricingsContainer,
  PriceHeader,
  InstructionTypeLabel,
  PricingGroup,
  ButtonItemBox,
  ButtonItem,
  ButtonItemText,
} from './PricingSectionStyle';

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

export default PricingSection;
