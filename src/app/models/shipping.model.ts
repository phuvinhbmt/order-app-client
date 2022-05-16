import {attribute} from "./attribute.model";

export class shipping {
  attributes: attribute[] = [];
  constructor() {
    this.attributes.push(new attribute('phoneNumber', 'tel', false, 'Customers phone number'));
    this.attributes.push(new attribute('countryCode', 'string', true, 'Two letter code'));
    this.attributes.push(new attribute('name', 'string', true, ''));
    this.attributes.push(new attribute('postcode', 'string', true, ''));
    this.attributes.push(new attribute('suburb', 'string', false, ''));
    this.attributes.push(new attribute('line1', 'string', false, ''));
  }
}
