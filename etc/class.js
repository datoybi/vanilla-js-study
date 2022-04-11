let num = 0;

class Person {
    constructor(){
        this._data = 0;
    }

    get data() {return this._data;}
    set data(newData) {this._data = newData}

    increase() {
        num += this.data;
    }
    
    toString() {console.log(num)}
        
}

