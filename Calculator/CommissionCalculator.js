import {Sale} from '../Employee/Sale';

export class CommissionCalculator{

    constructor(baseKardexSalary, commissionPercentage){
        this.salesList = [];
        this.baseKardexSalary = baseKardexSalary;
        this.commissionPercentage = commissionPercentage;
    }

    calculatePayment(){
        return (this.baseKardexSalary+(this.commissionPercentage*this.calculateAmountFromSales()));
    }

    addEmployeeSale(date, amount){
        let sale = new Sale(date, amount);
        this.salesList.push(sale);
    }

    calculateAmountFromSales(){
        let totalAmount = 0;
        this.salesList.forEach(function (sale) {
            totalAmount += sale.getAmountSold();
        });
        return totalAmount;
    }
}