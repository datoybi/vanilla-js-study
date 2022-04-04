class Producer {
    constructor(aProvince, data) {
        // aProvince : province 객체, data : {name: Sinope, cost: 10, production: 6}
        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name; 
        this._production = data.production || 0; 
    }
    
    get name() {return this._name;}
    get cost() {return this._cost;}
    set cost(arg) {this._cost = parseInt(arg);}

    get production() {return this._production;}
    set production(amountStr) {
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production; // 리팩토링할 타깃
        this._production = newProduction;
    }

}