class Queue{
    constructor(){
        this.a=[]
    }
    front(){
        if(this.a.length===0){
            console.log("Queue is empty(front)")
            return 
        }else return console.log(this.a[0])
    }
    enqueue(value){
        this.a.push(value)
    }
    dequeue(value){
        if(this.a.length===0){
            console.log("큐가 비었습니다.")
            return
        }
        this.a.shift() // 배열의 맨 앞 삭제
    }
}
const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
for(let i=0;i<4;i++){
    console.log(q.front()) // a에 있는 데이터중 첫번째를 보여줌
    q.dequeue() // a에 있는 첫번째 데이터를 삭제
}
/*
1
2
3
4
*/