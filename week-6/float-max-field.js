export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        return parseFloat(this.field) < this.max;
    }

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }

}