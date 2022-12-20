import React from 'react';

const GSTPrice = (props) => {
  const { basePrice, gstPercent, gstApplicable } = props;

  const calculatePriceIncGST = () => {
    return gstApplicable ? basePrice + basePrice * gstPercent : basePrice;
  };

  return <div>{calculatePriceIncGST()}</div>;
};

export default GSTPrice;
