class Province {
    constructor(doc) {
        this._name = doc.name; // 지역이름
        this._producers = [];  // 생산자 이름들
        this._totalProduction = 0; // 총수익
        this._demand = doc.demand; // 수요
        this._price = doc.price; // 가격
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    addProducer(arg) {
        this._producers.push(arg); 
        this._totalProduction += arg.production; // 생산량 추가
    }

    get name() {return this._name;}
    get producers() {return this._producers.slice()}
    get totalProduction() {return this._totalProduction;}
    set totalProduction(arg) {this._totalProduction = arg;} 
    get demand() {return this._demand;}
    set demand(arg) {this._demand = parseInt(arg);}
    get price() {return this._price;}
    set price(arg) {this._price = parseInt(arg);}

    // 생산 부족분 계산
    get shortfall() {
        return this._demand - this.totalProduction; // 30 - 25 
    }
    // 수익 계산
    get profit() {
        // console.log(this.demandValue); // 500
        // console.log(this.demandCost); // 270
        return this.demandValue - this.demandCost;
    }

    get demandValue() {
        return this.satisfiedDemand * this.price;
    }

    get satisfiedDemand() {
        return Math.min(this._demand, this.totalProduction);
    }

    get demandCost() {
        let remainingDemand = this.demand;
        let result = 0;
        this.producers
            .sort((a, b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
        return result;
    }    
}

function sampleProvinceData() {
    return {
        name : "Asia",
        producers: [
            {name: "Byzantium", cost: 10, production: 9},
            {name: "Attalia", cost: 12, production: 10},
            {name: "Sinope", cost: 10, production: 6},
        ],
        demand: 30,
        price: 20
    };
}
