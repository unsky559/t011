import * as React from 'react';
import { useState } from 'react';
import InputCurrency from '../inputCurrency/inputCurrency';
import { currencies } from '../inputCurrency/currencies';

const ConverterBlock = () => {
  const inputtedByUser = useState({
    value: 0,
    currency: currencies.UAH,
  });

  return (
        <div>
            <InputCurrency inputtedByUser={inputtedByUser} />
            <InputCurrency defaultCurr={currencies.EUR} inputtedByUser={inputtedByUser} />
            <InputCurrency defaultCurr={currencies.USD} inputtedByUser={inputtedByUser} />
        </div>
  );
};

export default ConverterBlock;
