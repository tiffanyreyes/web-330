export class FloatField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    validate() {
        return !isNaN(parseFloat(this.field));
    }

    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`;
    }
};