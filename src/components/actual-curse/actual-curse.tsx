import * as React from 'react';
import { useEffect, useState } from 'react';
import { currencies } from '../inputCurrency/currencies';
import getCurrency from '../../exPoints/privatAPI';
import CurrencyDisplay from '../currency-display/currency-display';

const ActualCurse = () => {
  const [course, updateCourse] = useState(new Map());
  useEffect(() => {
    getCurrency.then((value) => {
      updateCourse(value);
    });
  }, []);
  return <div>
      <CurrencyDisplay value={course.get(currencies.EUR)} currency={currencies.EUR}/>
      <CurrencyDisplay value={course.get(currencies.USD)} currency={currencies.USD}/>
    </div>;
};

export default ActualCurse;
