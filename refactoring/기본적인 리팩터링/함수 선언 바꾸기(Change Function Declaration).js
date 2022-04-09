/*
    함수 선언 바꾸기 
*/

// 변경 전 (함수 이름을 너무 축약한 예)
function circum(radius) { }

// 변경 후
function circumference(radius) { }


// 변경전 (마이그레이션 절차)
function circum(radius) { 
    return 2 * Math.PI * radius;
}

// 변경 후
function circum(radius) { 
    return circumference(radius);
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}
// 수정이 끝나면 함수를 인라인하기


// 변경 전 (매개변수 추가)
function addReservation(customer) {
    this._reservations.push(customer);
}

// 변경 후 
function addReservation(customer) {
    this.zz_addReservation(customer, false);
}

function zz_addReservation(customer, isPriority) {
    this._reservations.push(customer);
}


// 변경 전 (매개변수를 속성으로 바꾸기)
function inNewEngland(aCustomer){
    return ["NA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEnglanders = somCustomers.filter(c => inNewEngland(c)); // 뉴 잉글랜드에 거주하는지 판단

// 변경 후
// step 1
function inNewEngland(aCustomer){
    const stateCode = aCustomer.address.state;
    return ["NA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// step 2
function inNewEngland(aCustomer){
    const stateCode = aCustomer.address.state;
    return xxNewinNewEngland(stateCode);
}

function xxNewinNewEngland(stateCode){
    return ["NA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// step 3 
function inNewEngland(stateCode){
    return ["NA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders2 = someCustomers(c => inNewEngland(c.address.state));

