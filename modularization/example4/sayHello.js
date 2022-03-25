export function fn1(name){
    a = `안녕하세요! ${name}!` // Uncaught ReferenceError: a is not defined
    return a;
}

export function fn2(name){
    return `${name} 님이 입장하셨습니다.`;
}
