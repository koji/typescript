class Calc {
    firstInput: number;
    secondInput: number;

    constructor(firstInput:number, secondInput:number) {
        this.firstInput = firstInput;
        this.secondInput = secondInput;
    }

    add = (): number => {
        return this.firstInput + this.secondInput;
    }
}

export default Calc;