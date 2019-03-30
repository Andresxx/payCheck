export class FixedCalculator {
    
    constructor(amount){
        this.amount = amount;
    }

    calculatePayment(){
        return this.amount;
    }
}