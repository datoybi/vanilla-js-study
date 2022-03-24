import Component from "../core/component.js";

export default class Items extends Component {
    setup() {
        this.$state = {items: ['item1', 'item2']};
    }

    template() {
        const {items} = this.$state;
        return `
            <ul>
                ${items.map((item, key) => `
                <li>
                    ${item}
                    <button class="deleteBtn" data-index="${key}">삭제</button>    
                </li>
                `).join('')}
            </ul>
            <button class="addBtn">추가</button>
        `
    }

    setEvent() {

        // 이벤트 버블링을 사용한 방식(?)
        this.$target.addEventListener('click', ({ target }) => {
            const items = [...this.$state.items];

            if (target.classList.contains('addBtn')) {
                this.setState({ items: [...items, `item${items.length + 1}`]});
            }

            if (target.classList.contains('deleteBtn')) {
                items.splice(target.dataset.index, 1);
                this.setState({items});
            }
        });

        
        // this.$target.querySelector('.addBtn').addEventListener('click', () => {
        //     const {items} = this.$state;
        //     this.setState({ items: [...items, `item${items.length + 1}`] });
        // });

        // this.$target.querySelectorAll('.deleteBtn').forEach(deleteBtn => 
        //     deleteBtn.addEventListener('click', ({ target }) => {
        //         const items = [...this.$state.items];
        //         items.splice(target.dataset.index, 1);
        //         this.setState({ items });
        // }));

        
    }
}