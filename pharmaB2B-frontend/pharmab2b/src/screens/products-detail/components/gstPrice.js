import React from 'react';
import { LOCAL_CURRENCY_SIGN as LCR } from '../../../constants';
const GSTPrice = (props) => {
  const { basePrice, gstPercent, gstApplicable } = props;

  const calculatedGST = (basePrice * gstPercent) / 100;

  const calculatedPriceIncGST = gstApplicable
    ? basePrice + calculatedGST
    : basePrice;

  return (
    <div>
      Base Price: {LCR}
      {basePrice}{' '}
      {gstApplicable ? `+ ${calculatedGST} GST (${gstPercent}%)` : '+ No GST'}
      <div>
        Final Price: {LCR}
        {calculatedPriceIncGST}
      </div>
    </div>
  );
};

export default GSTPrice;
