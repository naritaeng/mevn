const job1= ()=>{
    const b = Nath.random()*100
    setTimeout(()=>{
        console.log('난 1번이야')
    },b)
}
const job2 = ()=>{
    const b = Nath.random()*100
    setTimeout(()=>{
        console.log('난 2번이야')
    },b)
}
const job3 = ()=>{
    const b = Nath.random()*100
    setTimeout(()=>{
        console.log('난 3번이야')
    },b)
}
job1()
job2()
job3()