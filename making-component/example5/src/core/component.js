export default class Component {
    $target;
    $props;
    $state;
    constructor($target, $props){
        this.$target = $target;
        this.$props = $props; // $props 할당
        this.setup();
        this.setEvent();
        this.render();
    }
    setup() {};
    mounted() {};
    template() {return '';}
    render() {
        this.$target.innerHTML = this.template();
        this.mounted();
    }
    setEvent(){}
    setState(newState){
        this.$state = {...this.$state, ...newState};
        console.log('setState : ' + JSON.stringify(this.$state));
        this.render();
    }
    // 이벤트 버블링을 통한 등록 과정을 메소드로 만들어서 사용
    addEvent(eventType, selector, callback) {
        const children = [...this.$target.querySelectorAll(selector)];
        // selector에 명시한 것보다 더 하위 요소가 선택되는 경우가 있을 땐 closest를 이용하여 처리한다.
        const isTarget = (target) => children.includes(target) || target.closest(selector);

        this.$target.addEventListener(eventType, event => {
            if(!isTarget(event.target)) return false;
            callback(event);
        })
    }
}