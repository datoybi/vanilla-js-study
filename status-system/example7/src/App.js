import { Component } from "./core/Component.js";
import { store } from "./store.js";

// 세개의 컴포넌트가 store를 참조하고 store가 변경되었을 때 컴포넌트가 자동으로 렌더링 되는 형태 
// 여기 Flux 패턴을 붙이면 Redux나 Vuex가 된다.
/*
Flux의 가장 큰 특징은 단방향 데이터 흐름이다.
데이터 흐름은 다음과 같다.
    Dispatcher -> Store
    Store -> View
    View -> Action
    Action -> Dispatcher
이런 단방향 데이터 흐름은 데이터의 변화를 훨씬 예측하기 쉽게 만든다.
*/
const InputA = () => `
    <input id="stateA" value="${store.state.a}" size="5" />
`;

const InputB = () => `
    <input id="stateB" value="${store.state.b}" size="5" />
`;

const Calculator = () => `
    <p> a + b = ${store.state.a + store.state.b}</p>
`;

export class App extends Component {
    initState () {
        return {
            a : 10,
            b : 20
        }
    }

    template() {
        return `
            ${InputA()}
            ${InputB()}
            ${Calculator()}
        `;
    }

    setEvent() {
        const { $el } = this;
        $el.querySelector('#stateA').addEventListener('change', ({ target }) => {
            store.setState({ a: Number(target.value) });
        })

        $el.querySelector('#stateB').addEventListener('change', ({ target }) => {
            store.setState({ b: Number(target.value) });
        })
    }
}
