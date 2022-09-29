import { currencies } from '../components/inputCurrency/currencies';
import { currencyType } from '../components/inputCurrency/currencyType';
import getCurrency from '../exPoints/privatAPI';

/*
const Converter = {
  course: {
    [currencies.USD]: 36.56,
    [currencies.EUR]: 37.10,
    [currencies.UAH]: 1,
  },
  toUAH(from: currencyType) {

    return +(from.value * this.course[from.currency]).toFixed(2);
  },
  fromUAH(to: currencyType) {
    return +(to.value / this.course[to.currency]).toFixed(2);
  },
};

 */

async function Converter() {
  const data: Map<currencies, number> = await getCurrency;
  const course = {
    [currencies.USD]: data.get(currencies.USD),
    [currencies.EUR]: data.get(currencies.EUR),
    [currencies.UAH]: 1,
  };
  return {
    toUAH(from: currencyType) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return +(from.value * course[from.currency]).toFixed(2);
    },
    fromUAH(to: currencyType) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return +(to.value / course[to.currency]).toFixed(2);
    },
  };
}

export default Converter;
