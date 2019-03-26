export class Paycheck{

    constructor(employee){
        this.amount = 0;
        this.employeeName = "";        
        this.employee = employee;
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

