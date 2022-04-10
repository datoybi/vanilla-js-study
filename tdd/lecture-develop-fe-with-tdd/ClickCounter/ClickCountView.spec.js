describe('App.ClickCountView', () => {
    let clickCounter, updateEl, triggerEl, view ;

    beforeEach(() => {
        const data = {value : 0 }
        clickCounter = App.ClickCounter(data);
        updateEl = document.createElement('span');
        triggerEl = document.createElement('button');
        view = App.ClickCountView(clickCounter, {updateEl, triggerEl});
    });

    describe('네거티브 테스트', () => {
        it('clickCounter를 주입하지 않으면 에러를 던진다', () => {
            const actual = () => App.ClickCountView(null, {updateEl});
            expect(actual).toThrowError(App.ClickCountView.message.noClickCounter);
        })
    
        it('updateEl 주입하지 않으면 에러를 던진다', () => {
            const actual = () => App.ClickCountView(clickCounter, {triggerEl});
            expect(actual).toThrowError(App.ClickCountView.message.noUpdateEl);
        });
    })
    
    describe('updateView()', () => {
        it('ClickCounter의 getValue() 값을 출력한다.', () => {
            const counterValue = clickCounter.getValue();
            view.updateView();
            expect(updateEl.innerHTML).toBe(counterValue.toString());
        });
    });

    describe("increaseAndUpdateView()", () => {
        it("ClickCounter의 count 실행한다.", () => {
            spyOn(clickCounter, 'count');
            view.increaseAndUpdateView();
            expect(clickCounter.count).toHaveBeenCalled();
        });
        it("updateView를 실행한다.", () => {
            spyOn(view, 'updateView');
            view.increaseAndUpdateView();
            expect(view.updateView).toHaveBeenCalled();
        });
    });

    it("클릭 이벤트가 발생하면 increaseAndUpdateView를 실행한다", () => {
        spyOn(view, 'increaseAndUpdateView');
        triggerEl.click();
        expect(view.increaseAndUpdateView).toHaveBeenCalled();
    });
});