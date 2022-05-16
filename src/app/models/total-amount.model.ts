import {attribute} from "./attribute.model";

export class totalAmount {
  attributes: attribute[] =[];

  constructor() {
    this.attributes.push(new attribute('amount', 'number', true, 'The total value amount'));
    this.attributes.push(new attribute('currency', 'string', true, 'The currency type of the amount ( should be EUR )'));
  }
}
