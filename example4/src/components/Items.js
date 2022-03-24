import Component from "../core/component.js";

export default class Items extends Component {
    get filteredItems() {
        const {isFilter, items} = this.$state;
        return items.filter(({ active }) => (isFilter === 1 && active) || 
                                            (isFilter === 2 && !active) ||
                                            isFilter === 0);
    }

    setup() {
        this.$state = {
            isFilter: 0,
            items: [
                {
                    seq: 1,
                    contents: 'item1',
                    active: false,
                },
                {
                    seq: 2,
                    contents: 'item2',
                    active: true,
                }
            ]
        };
    }

    template() {
        const {items} = this.$state;
        return `
        <header>
            <input type="text" class="appender" placeholder="아이템 내용 입력" />
        </header>
        <main>
            <ul>
                ${this.filteredItems.map(({contents, active, seq}) => `
                <li data-seq="${seq}">
                    ${contents}
                    <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
                        ${active ? '활성' : '비활성'}
                    </button>
                    <button class="deleteBtn">삭제</button>
                </li>
                `).join('')}
            </ul>
        </main>
        <footer>
            <button class="filterBtn" data-is-filter="0">전체 보기</button>
            <button class="filterBtn" data-is-filter="1">활성 보기</button>
            <button class="filterBtn" data-is-filter="2">비활성 보기</button>
        </footer>
        `
    }

    setEvent() {
        this.addEvent('keyup', '.appender', ({key, target}) => {
            if(key !== 'Enter') return;
            const {items} = this.$state;
            const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
            const contents = target.value;
            const active = false;
            this.setState({
                items: [
                    ...items,
                    {seq, contents, active}
                ]
            });
        })

        this.addEvent('click', '.addBtn', ({target}) => {
            const {items} = this.$state;
            this.setState({items: [...items, `item${items.length + 1}`]});
        });
        
        this.addEvent('click', '.deleteBtn', ({target}) => {
            const items = [...this.$state.items];
            items.splice(target.dataset.index, 1);
            this.setState({items});
        });
        
        this.addEvent('click', '.filterBtn', ({ target }) => {
            this.setState({ isFilter: Number(target.dataset.isFilter)});
        });
    }
}