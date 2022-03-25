export function fn1(name){
    return `안녕하세요! ${name}!`;
}

export function fn2(name){
    return `${name} 님이 입장하셨습니다.`;
}

export {
    fn1 as hello,
    fn2 as enter
}