describe('province', function() {
    let asia;
    beforeEach(function() {
        asia = new Province(sampleProvinceData());
    });

    it('shortfall', function (){ // 테스트 블록
        // const asia = new Province(sampleProvinceData()); // 픽스처 설정 (고정장치)
        // 샘플 지역 정보로부터 생성한 Province 객체를 픽스쳐로 설정했다.
        expect(asia.shortfall).toBe(5);
        // 이 픽스처의 속성들을 검증하는데, 여기서는 주어진 초깃값에 기초하여 생산 부족분을 정확히 계산했는지 확인한다.
        
        // 실패해야 할 상황에서는 반드시 실패하게 만들자.
        // 각각의 테스트가 실패하는 모습을 최소한 한 번씩은 직접 확인해본다.
        // return this._demand - this.totalProduction * 3; // 30 - 25 
    });

    it('profit', function() {
        // const asia = new Province(sampleProvinceData());
        expect(asia.profit).toBe(230);
    });

    it('change production', function() {
        asia.producers[0].production = 20;
        expect(asia.shortfall).toBe(-6);
        expect(asia.profit).toBe(292);
    });

    it('zero demand', function() { // 수요가 없다
        asia.demand = 0;
        expect(asia.shortfall).toBe(-25);
        expect(asia.profit).toBe(0);
    });

    it('negative demand', function() {
        asia.demand = -1;
        expect(asia.shortfall).toBe(-26);
        expect(asia.profit).toBe(-10);
    });

    it('empty string demand', function() {
        asia.demand = "";
        expect(asia.shortfall).toBeDefined();
        expect(asia.profit).toBeDefined();
    });
        
    

});

describe('no producers', function() { // 생산자가 없다.
    let noProducers;
    beforeEach(function() {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
    });
    
    it('shortfall', function() {
        expect(noProducers.shortfall).toBe(30);
    });

    it('profit', function() {
        expect(noProducers.profit).toBe(0);
    });
});

// describe('string for producers', function() { // 생산자 수 필드에 문자열을 대입한다.
//     it('', function() {
//         const data = {
//             name: "String producers",
//             producers: "",
//             demand: 30,
//             price: 20
//         };
//         const prov = new Province(data);
//         expect(prov.shortfall).toBe(0);
//     })
// })