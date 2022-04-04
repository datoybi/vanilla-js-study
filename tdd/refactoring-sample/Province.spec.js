describe('province', function() {
    it('shortfall', function (){ // 테스트 블록
        const asia = new Province(sampleProvinceData()); // 픽스처 설정 (고정장치)
        // 샘플 지역 정보로부터 생성한 Province 객체를 픽스쳐로 설정했다.
        expect(asia.shortfall).toBe(5);
        // 이 픽스처의 속성들을 검증하는데, 여기서는 주어진 초깃값에 기초하여 생산 부족분을 정확히 계산했는지 확인한다.
        
        // 실패해야 할 상황에서는 반드시 실패하게 만들자.
        // 각각의 테스트가 실패하는 모습을 최소한 한 번씩은 직접 확인해본다.
        // return this._demand - this.totalProduction * 3; // 30 - 25 
    })
})