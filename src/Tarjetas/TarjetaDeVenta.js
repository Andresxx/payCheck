export class TarjetaDeVenta{
    constructor(date, amountSold){
        this.date = date;
        this.amountSold = amountSold;
    }

    getAmountSold(){
        return this.amountSold;
    }

    setAmountSold(newAmount){
        this.amountSold = newAmount;
    }
}
