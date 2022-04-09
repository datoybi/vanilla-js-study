/*
    함수 추출하기 <->함수 인라인하기
    코드 조각을 찾아 무슨 일을 하는지 파악한 다음, 독립된 함수로 추출하고 목적에 맞는 이름을 붙인다.
    언제? 
        코드를 보고 무슨 일을 하는지 파악하는 데 한참이 걸린다면 그 부분을 함수로 추출한 뒤 '무슨 일'에 걸맞는 이름을 짓는다.
    1줄인지 5-6줄인지 길이는 중요하지 않다
    이름을 잘 지어야 한다.
*/

// 변경 전
function printOwing(invoice){
    printBanner();
    let outstanding = calculateOutstanding();

    // 세부 사항 출력
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
}

// 변경 후 
function printOwing(invoice){
    printBanner();
    let outstanding = calculateOutstanding();
    printDetails();

    function printDetails() {
        // 세부 사항 출력
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outstanding}`);
    }
}