import {attribute} from "./attribute.model";

export class merchant {
  attributes: attribute[] = [];
  constructor() {
    this.attributes.push(new attribute('redirectCancelUrl', 'url', true, 'use -https://portal.integration.scalapay.com/failure-url for testing'));
    this.attributes.push(new attribute('redirectConfirmUrl', 'url', true, 'use -https://portal.integration.scalapay.com/success-url for testing'));
  }
}
