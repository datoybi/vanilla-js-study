/*
    함수 인라인하기 <-> 함수 추출하기
    언제?
        쓸데없는 간접 호출들이 거슬릴 때
    상황이 복잡하다면 인라인하지 말것    

*/

// 변경 전
function getRating(driver){
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver){
    return driver.numberOfLateDeliveries > 5;
}

// 변경 후 
function getRating(driver){
    return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}


// 변경 전 
function reportLines(aCustomer){
    const lines = [];
    gatherCustomerData(lines, aCustomer);
    return lines;
}

function gatherCustomerData(out, aCustomer){
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
}

// 변경 후
function reportLines(aCustomer){
    const lines = [];
    lines.push(["name", aCustomer.name]);
    lines.push(["location", aCustomer.location]);
    return lines;
}

