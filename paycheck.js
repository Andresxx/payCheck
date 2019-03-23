export class Paycheck{

    constructor(){
        this.amount = 0;
        this.employeeName = "";        
    }

    getAmount() {
        return this.amount;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    getEmployeeName() {
        return this.employeeName;
    }
    
    setEmployeeName(employeeName) {
        this.employeeName = employeeName;
    }
}

