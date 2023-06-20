/* includes,indexOf,findIndex */

// const a = [1,2,3,4,5]
// console.log(a.includes(3)) // true -- 있냐 없냐

const a = [1,2,3,4,5]
// const ret = a.indexOf(3)
const ret = a.findIndex(e=>e===3) // -- 어디에 있냐
console.log(ret)
