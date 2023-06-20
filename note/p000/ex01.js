const arr = Array(100).fill(0).reduce((a,c,i,arr)=>{
    arr[i]=i*2+1
    return arr
},0) // reduce는 누적된 값
console.log(arr)