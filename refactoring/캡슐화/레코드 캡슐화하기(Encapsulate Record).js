/*
    레코드 캡슐화하기
    레코드는 계산에서 얻을 수 있는 값과 그렇지 않은 값을 명확히 구분해 저장해야 하는 점이 번거롭다.
    
    캡슐화를 하면 무엇이 저장된 값이고 무엇이 계산된 값인지 알 필요가 없다
    이름을 바꿀때도 좋다.
    가변 데이터일 때는 객체가 좋다


*/

// 전
var organization = {name: "애크미 구스베리", country: "GB"};

// 후
class Organization {
    constructor(data){
        this._name = data.name;
        this._country = data.country;
    }

    get name() {return this._name;}
    set name(arg) {this._name = arg;}
    get country() {return this._country;}
    set country(arg) {this._country = arg;}
}

// 간단한 레코드 캡슐화하기
var organization = {name: "애크미 구스베리", country: "GB"};

// 읽고 쓸 때
result += `<h1>${organization.name}</h1>`; // 읽기 예
organization.name = newName; // 쓰기 예

// 변수 캡슐화하기
function getRaeDataOrganization() {
    return organization;
}

// 그러면 읽고 쓸 때 이렇게 바뀐다.
result += `<h1>${getRaeDataOrganization().name}</h1>`; // 읽기 예
getRaeDataOrganization().name = newName; // 쓰기 예

// 클래스를 만든다.
class Organization {
    constructor(data){
        this._data = data;
    }
}

// 최상위
var organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getRawDataOrganization() {return organization._data;}
function getOrganization() {return organization;}

// 세터, 게터를 사용하도록 고친다
class Organization {
    constructor(data){
        this._name = data.name;
        this._country = data.country;
    }

    get name() {return this._name;}
    set name(aString) {this._name = aString;}
    get country() {return this._country;}
    set country(aCountryCode) {this._country = aCountryCode;}
}


// 에시 : 중첩된 레코드 캡슐화하기
// 쓰기 예 
customerData[customerID].usage[year][month] = amount;

// 읽기 예
function compareUsage(customerID, laterYear, month){
    const later = customerData[customerID].usage[laterYear][month];
    const earlier = customerData[customerID].usage[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}

// step 1. 변수 캡슐화

function getRawDataOfCustomers() {return customerData;}
function setRawDataOfCustomers(arg) {customerData = arg;}

// 쓰기 예
getRawDataOfCustomers()[customerID].usage[year][month] = amount;

// 읽기 예
function compareUsage(customerID, laterYear, month){
    const later = setRawDataOfCustomers()[customerID].usage[laterYear][month];
    const earlier = setRawDataOfCustomers()[customerID].usage[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}

// step2. 클래스 만들기
class CustomerData {
    constructor(data){
        this._data = data;
    }
}

// 최상위
function getCustomerData() {return customerData;} 
function getRawDataOfCustomers() {return CustomerData._data;}
function setRawDataOfCustomers(arg) {customerData = new CustomerData(arg);}

// 쓰기 예
getRawDataOfCustomers()[customerID].usage[year][month] = amount; // 함수 추출하기

// step3. 함수 만들기
setUsage(customerID, year, month, amount);

// 최상위
function setUsage(customerID, year, month, amount) { 
    getRawDataOfCustomers()[customerID].usage[year][month] = amount; 
}

// step4. 만든 함수를 클래스로 옮기기

// 쓰기 예
CustomerData().setUsage(customerID, year, month, amount);

class CustomerData {
    constructor(data){
        this._data = data;
    }

    setUsage(customerID, year, month, amount) { 
        getRawDataOfCustomers()[customerID].usage[year][month] = amount; 
    }
}


