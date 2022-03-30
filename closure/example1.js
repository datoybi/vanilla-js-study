function outer(param){
    const outerParam = `This is how ${param} works!`;

    function inner() {
        console.log(outerParam);
    }
    return inner;
}

const closure = outer('CLOSURE');
closure();
//https://velog.io/@victor/Javascript-Closure-%ED%81%B4%EB%A1%9C%EC%A0%80