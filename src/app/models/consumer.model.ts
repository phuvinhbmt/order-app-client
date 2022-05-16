import {attribute} from "./attribute.model";

export class consumer {
  attributes: attribute[] =[];

  constructor() {
    this.attributes.push(new attribute('phoneNumber', 'tel', false, ''));
    this.attributes.push(new attribute('givenNames', 'text', true, 'First name'));
    this.attributes.push(new attribute('surname', 'text', true, 'Last name'));
    this.attributes.push(new attribute('email', 'email', false, 'Consumers email'));
  }
}
