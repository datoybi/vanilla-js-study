/*
    매개변수 객체 만들기
 
*/


// 전
// 온도 측정값 배열에서 정상 작동 범위를 벗어난 것이 있는지 검사하는 코드
const station = {
    name: "ZB1",
    reading: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
};

function readingOutsideRange(station, min, max){
    return station.readings
        .filter(r => r.temp < min || r.temp > max);
}

// 호출문
alerts = readingOutsideRange(station,
    operatingPlan.temperatureFloor, // 최저 온도
    operatingPlan.temperatureCeiling); // 최고 온도


// 후 
class NumberRange {
    constructor(min, max) {
        this._data = {min: min, max: max};
    }
    get min() {return this._data.min;}
    get max() {return this._data.max;}
}

function readingOutsideRange(station, range){
    return station.readings
        .filter(r => r.temp < range.min || r.temp > range.max);
}

const range = new NumberRange(operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling);

alerts = readingOutsideRange(station, range); 


