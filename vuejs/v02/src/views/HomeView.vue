<template>
  <h1>Vue3 프레임워크 수업 정리</h1>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      name: '홍길동',
      name2: '슈퍼맨',
      hero: '아이언맨',
      age: 26,
      age2: 33,
      status: false,
      inData: '',
      arrData: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    func1: function (text) {
      alert(text)
    },
    add: function () {
      this.arrData.push(this.arrData.length + 1)
    },
    sub: function () {
      this.arrData.pop()
    }
  }
}
</script>
<style>
li {
  float: left;
  margin: 0 20px 0 10px;
}
button,
input {
  margin: 2px 10px;
}
</style>
