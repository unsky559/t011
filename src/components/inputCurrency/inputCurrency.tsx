import * as React from 'react';
import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { currencies } from './currencies';
import { currencyType } from './currencyType';
import Converter from '../../functions/currencyConverter';
import styles from './inputCurrency.module.scss';

type propType = {
    inputtedByUser: [currencyType, Dispatch<SetStateAction<currencyType>>],
    defaultCurr?: currencies
}

const InputCurrency = (props: propType) => {
  const [stringValue, updateStringValue] = useState('');
  const [value, updateValue] = useState(0);
  const [currency, updateCurrency] = useState(String(props.defaultCurr ?? currencies.UAH));

  const convert = () => {
    Converter().then((r) => {
      const uah = r.toUAH(props.inputtedByUser[0]);
      updateValue(r.fromUAH({ value: uah, currency }));
    });
  };

  useEffect(() => {
    convert();
  }, [props.inputtedByUser[0], currency]);

  useEffect(() => {
    updateStringValue(value.toString());
  }, [value]);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateStringValue(e.target.value);

    const data = Number.parseFloat(e.target.value);
    if (!Number.isNaN(data) && Number.isFinite(data)) {
      updateValue(data);
      props.inputtedByUser[1]({
        value: data,
        currency,
      });
    }
  };

  const onselect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = String(e.target.selectedOptions[0].value);
    if (data in currencies) {
      updateCurrency(data);
    }
  };

  return (
        <div className={styles.inputCurrency}>
            <input type="number" onInput={onchange} value={stringValue}/>
            <select name="currency" onChange={onselect} value={currency}>
                <option
                    value={currencies.UAH}>
                    {currencies.UAH}
                </option>
                <option
                    value={currencies.USD}>
                    {currencies.USD}
                </option>
                <option
                    value={currencies.EUR}>
                    {currencies.EUR}
                </option>
            </select>
        </div>
  );
};

export default InputCurrency;
