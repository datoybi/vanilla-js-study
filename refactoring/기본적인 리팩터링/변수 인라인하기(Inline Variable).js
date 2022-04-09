/*
    변수 인라인하기 <-> 변수 추출하기
    언제?
        그 이름이 원래 표현식과 다를 바 없을 때 사용
*/

// 변경 전 
function example() {
    let basePrice = anOrder.basePrice;
    return (basePrice > 1000);    
}

// 변경 후
function example() {
    return (anOrder.basePrice > 1000);
}
