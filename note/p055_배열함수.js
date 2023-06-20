const func1 = (e,i)=>{
    console.log(`${i}번째 요소는 ${e}입니다.`)
}
const func2 = (e,i)=>e*2
const func3 = (a,c,i)=>a+c
const func4 = e => e%2
const arr = [1,2,3,4,5]
const a = arr.forEach(func1)
/* 0번째 요소는 1입니다.
    1번째 요소는 2입니다.
    2번째 요소는 3입니다.
    3번째 요소는 4입니다.
    4번째 요소는 5입니다.
*/
console.log('forEach:',a) // undefined
const b = arr.map(func2)
console.log('map:',b) // [2,4,6,8,10]
const c = arr.reduce(func3)
console.log('reduce:',c) // 15
const d = arr.filter(e=>e%2)
console.log('filter:',d) // [1,3,5]