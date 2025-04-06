import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setter
  set amount(value) {
    // if (typeof value !== 'number')
    if (!(value instanceof Number)) {
      throw new TypeError('amount must be number');
    }
    this._amount = value;
  }

  set currency(value) {
    // if (typeof value !== Currency)  won't work with custom datatype like class
    if (!(value instanceof Currency)) {
      throw new TypeError('currency is not Currency class. Missing code and name');
    }
    this._currency = value;
  }

  // method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number') && (typeof conversionRate !== 'number')) {
      throw new TypeError(`${amount} or ${conversionRate} is not a Number`);
    }
    const convertedPrice = amount * conversionRate;
    return convertedPrice;
  }
}
