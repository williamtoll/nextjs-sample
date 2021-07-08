/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const formatPriceLabel = (
  amount: number,
  currency = '$',
  isSubscription = false,
) => {
  return `${currency} ${addZeroToSingleDecimal(amount)} ${
    isSubscription ? '/M' : ''
  }`;
};

//eg. 40.1 => 40.10
export const addZeroToSingleDecimal = (num: number): string => {
  if (num % 1 !== 0) {
    return Number(num).toFixed(2);
  }

  return num.toString();
};

export const calculatePackPriceWithDiscount = (
  packSize: number,
  basePrice: number,
  packDiscount: number,
) => {
  let price = (1 - packDiscount / 100) * packSize * basePrice;

  if (!Number.isInteger(price)) {
    price = Number(price.toFixed(2));
  }

  return price;
};
