var App = App || {}

App.ClickCountView = (clickCounter, options) => {
    if (!clickCounter) throw Error(App.ClickCountView.message.noClickCounter);
    if (!options.updateEl) throw Error(App.ClickCountView.message.noUpdateEl);

    const view = {
        updateView() {
            options.updateEl.innerHTML = clickCounter.getValue();
        },

        increaseAndUpdateView() {
            clickCounter.count(); 
            this.updateView();
        }
    }

    options.triggerEl.addEventListener('click', () => {
        view.increaseAndUpdateView();
    })

    return view;
}

App.ClickCountView.message = {
    noClickCounter: 'clickCounter를 주입해야 합니다.',
    noUpdateEl : 'updateEl을 주입해야 합니다.'
}