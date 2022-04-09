/*
    여러함수를 변환 함수로 묶기

    변환함수? 
        원본 데이터를 입력 받아서 필요한 정보를 모두 도출한 뒤, 각각을 출력 데이터의 필드에 넣어 반환한다.

    원본 데이터가 코드 안에서 갱신될 때는 클래스로 묶기
*/

// 전
function base(aRaeding) { }
function taxableCharge(aReading) { }

// 후 
function enrichReading(argReading) {
    const aReading = _.cloneDeep(argReading);
    aReading.baseCharge = base(aReading);
    aReading.texableCharge = texableCharge(aReading);
    return aReading;
}

// 예시

// 클라이언트 1
let reading = {customer: "ivan", quantity: 10, month: 5, year: 2020};
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


// 리팩토링
function enrichReading(original){
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    return result;
}

// 클라이언트 3
const rawReading3 = acquireReading(); // 미가공 측정값
const aReading3 = enrichReading(rawReading3);
const baseChangeAmount3 = aReading3.baseChange;

// 클라이언트 1
let rawReading4 = acquireReading();
const aReading4 = enrichReading(rawReading4);
const baseCharge4 = aReading4.baseCharge;





