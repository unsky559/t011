import { currencies } from '../components/inputCurrency/currencies';

const getCurrency: Promise<Map<currencies, number>> = new Promise((resolve) => {
  fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then((value) => value.json()).then((data: Array<Record<string, number>>) => {
      const map = new Map([
        [currencies.USD, data[0].buy],
        [currencies.EUR, data[1].buy],
      ]);
      resolve(map);
    });
});

export default getCurrency;
