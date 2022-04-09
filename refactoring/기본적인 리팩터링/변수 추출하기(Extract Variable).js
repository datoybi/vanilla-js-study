/*
    변수 추출하기 <-> 변수 인라인하기
    언제?
        표현식이 복잡해서 이해하기 어려울 때 사용
    
*/

// 변경 전 
function example() {
    return order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

// 변경 후
function example() {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}

// 변경 전
class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() {return this._data.quantity;}
    get itemPrice() {return this._data.itemPrice;}

    get Price() {
        return this.quantity * this.itemPrice -
            Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
            Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }
}
// 추출하려는 이름은 같다. 하지만 그 이름이 Order 클래스 전체에 적용되기 때문에 변수가 아닌 메서드를 추출해야한다.

// 변경 후
class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() {return this._data.quantity;}
    get itemPrice() {return this._data.itemPrice;}

    get Price() {
        return this.basePrice - this.quantityDiscount + this.shipping;
    }

    get basePrice() {return this.quantity * this.itemPrice;}
    get quantityDiscount() {return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;}
    get shipping() {return Math.min(basePrice * 0.1, 100);}
}
