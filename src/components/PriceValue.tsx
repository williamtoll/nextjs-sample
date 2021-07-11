/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import * as MoneyUtils from '../utils/money';
import { CheckCircleIcon } from '../images/CheckCircleIcon';
import { CartItem } from 'shared/types';
import { IconContainer } from './ClientCertificateStyles';
import {
  PricingContainer,
  EmptySpace,
  EmptyLabel,
  PricingLabelSuscription,
  PricingLabel,
  ValueContainer,
  NumberPrice,
} from './PriceValueStyle';

type Props = {
  isSelected: boolean;
  cartItem: CartItem;
};

const PricingValue: React.FC<Props> = ({ isSelected, cartItem }) => {
  return (
    <PricingContainer selected={isSelected} onClick={null}>
      {isSelected ? (
        <IconContainer>
          <CheckCircleIcon />
        </IconContainer>
      ) : null}
      {cartItem.label === 'Subscription' && cartItem.price === 0 ? (
        <EmptySpace>
          <EmptyLabel>Not Included</EmptyLabel>
          <PricingLabelSuscription>{cartItem.label}</PricingLabelSuscription>
        </EmptySpace>
      ) : (
        <>
          <PricingLabel>{cartItem.label}</PricingLabel>
          {cartItem.price && (
            <ValueContainer>
              <NumberPrice color="primary">
                {MoneyUtils.formatPriceLabel(
                  cartItem.price,
                  '$',
                  cartItem.isSubscription,
                )}
              </NumberPrice>
            </ValueContainer>
          )}
        </>
      )}
    </PricingContainer>
  );
};

export default PricingValue;
