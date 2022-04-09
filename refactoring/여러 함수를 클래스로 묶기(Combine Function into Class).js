/*
    여러 함수를 클래스로 묶기

*/

// 전
function base(aReading) { }
function taxbleCharge(aReading){ }
function calculateBaseCharge(aReading){ }

// 후
class Reading {
    base() { }
    taxbleCharge() { }
    calculateBaseCharge() { }
}

// 에시
let reading = {customer: "ivan", quantity: 10, month: 5, year: 2020};

// 클라이언트 1
const aReading1 = acquireReading();
const baseChange = baseRate(aReading1.month, aReading1.year) * aReading1.quantity;

// 클라이언트 2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity)
const taxableCharge = Math.max(0, base - taxThresholde(aReading.year));

// 클라이언트 3
const aReading2 = acquireReading();
const baseChangeAmount = calculateBaseCharge(aReading2);

function calculateBaseCharge(aReading2){
    return baseRate(aReading2.month, aReading2.year) * aReading2.quantity;
}

// step 1. 레코드 캡슐화
class Reading {
    constructor(data){
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month() {return this._month;}
    get year() {return this._year;}
    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
    get taxableCharge() {
        return Math.max(0, this.baseCharge - taxThreshold(aReading.year));
    }

}

// 클라이언트 3
const rawReading = acquireReading();
const aReading5 = new Reading(rawReading)
const basicChargeAmount = aReading5.baseCharge; // 함수인지 필드인지 구분 할 수 없는데 이를 단일 접근 원칙을 따르므로 권장한다. (단일 접근 원칙)

// 클라이언트 1
const rawReading6 = acquireReading();
const aReading6 = new Reading(rawReading6);
const basicChargeAmount6 = aReading6.baseCharge;

// 클라이언트 2
const rawReading7 = acquireReading();
const aReading7 = new Reading(rawReading7);
const taxableCharge7 = aReading7.taxbleCharge;
