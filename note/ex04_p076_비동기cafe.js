/* 주문 받은대로 처리하기 */
// 주문1) ex 1.7초만에 아메리카노가 나왔습니다!  [1~2초]
// 주문2) ex 3.5초만에 라떼 나왔습니다!         [2~3.5초]
// 주문3) ex 4.1초만에 카푸치노 나왔습니다!      [3~5초]
// 주문4) ex 2.2초만에 에스프레소 나왔습니다!    [2~3초]

const coffee1= ()=>{
    const a = Math.random()*(2-1)+1
    setTimeout(()=>{
        console.log(`${Math.round(a*10)/10}초만에 아메리카노가 나왔습니다!`)
    },a)
}
const coffee2= ()=>{
    const b = Math.random()*(3.5-2)+2
    setTimeout(()=>{
        console.log(`${Math.round(b*10)/10}초만에 라떼가 나왔습니다!`)
    },b)
}
const coffee3= ()=>{
    const c = Math.random()*(5-3)+3
    setTimeout(()=>{
        console.log(`${Math.round(c*10)/10}초만에 카푸치노가 나왔습니다!`)
    },c)
}
const coffee4= ()=>{
    const d = Math.random()*(3-2)+2
    setTimeout(()=>{
        console.log(`${Math.round(d*10)/10}초만에 에스프레소가 나왔습니다!`)
    },d)
}

coffee1()
coffee2()
coffee3()
coffee4()
