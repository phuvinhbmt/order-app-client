export class attribute {
  name: string;
  type: string;
  isRequired: boolean;
  description: string;

  constructor(attribute: string, type: string, isRequired: boolean, description: string) {
    this.name = attribute;
    this.type = type;
    this.isRequired = isRequired;
    this.description = description;
  }
}
