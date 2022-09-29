import * as React from 'react';
import styles from './currensy-display.module.scss';
import { currencies } from '../inputCurrency/currencies';

type propType = {
    currency: currencies,
    value: number
}

const CurrencyDisplay = (props: propType) => (
        <div className={styles.display}>
            <span className={styles.currencyTitle}>
                {props.currency}
            </span>
            <span className={styles.currencyValue}>
                {props.value}
            </span>
        </div>
);

export default CurrencyDisplay;
