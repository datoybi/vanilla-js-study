/*
중앙 집중식 상태관리
현대적인 프론트앤드 개발에서 제일 중요한 것은 상태관리이다.
Vue나 React같은 프론트앤드 프레임워크의 주된 목적중 하나가 상태를 기반으로 DOM을 랜더링 하는 것이기 때문이다.
중앙 집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경할 수 있게끔 만드는게 좋지 않을까?

- Observer Pattern에 대해 이해햐기
    store는 여러개의 컴포넌트에서 사용될 수 있다.
    store가 변경될 때 store가 사용되고 있는 component도 변경되어야 한다.
    이를 코드로 표현해보자.
*/

// store를 생성한다.
const store = new Store({
    a: 10,
    b: 20
});

// 컴포넌트를 생성한다.
const component1 = new Component({subscribe : [store]});
const component2 = new Component({subscribe : [store]});

// 컴포넌트가 store를 구독한다.
component1.subscribe(store); // a + b = ${store.state.a + store.state.b}
component2.subscribe(store); // a + b = ${store.state.a + store.state.b}

// store의 state를 변경한다.
store.setState({
    a: 100,
    b: 200
});

// store가 변경되었음을 알린다.
store.notify();

/*
처음에 component1은 a+b=30을 출력하고, component2는 a*b=200을 출력할 것이다.
store의 값이 변경된 다음에는 각각 a+b=300 a*b=20000을 출력할 것이다.

이러한 형태로 코드를 작성하는 것을 observer 패턴이라고 한다.

Observer pattern은 객체의 상태 변화를 관찰하는 관찰자들, 즉 옵저버들의 목록을 객체에 등록하여
상태변화가 있을 때마다 매서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴이다.
주로 분산 이벤트 핸들링 시스템을 구현하는 데 사용된다.
발행/구독 모델로 알려져 있기도 한다.
 */
