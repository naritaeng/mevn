<template>
  <div>
    <h1>EX2. 데이터 양방향 바인딩</h1>
    <h2>1. v-model을 사용하여 양방향을 구현</h2>
    <span>v-model:</span>
    <input type="text" v-model="inputValue" v-on:keyup.enter="setData" />
    <h3>{{ outputValue }}</h3>
    <button @click="inData = outData">꺼내오기:{{ inData }}</button>
    <button @click="setData()">local 저장</button>
    <button @click="getData()">local 출력</button>
    <hr />
    <h2>2. v-bind와 v-on을 사용하여 단방향(2가지로 양방향)을 구현</h2>
    <span>v-bind / v-on:</span
    ><input type="text" v-model="inputValue" v-on:keyup.enter="setData" />
    <h3>{{ outputValue }}</h3>
    <br />
    <button @click="setData">local 저장</button>
    <button @click="getData">local 출력</button>

    <hr />
  </div>
</template>
<script>
export default {
  name: 'ex2',
  data() {
    return {
      inData: undefined,
      inValue: '읽기만 함',
      outData: '꺼내온 값이에요.',
      temp: null,
      inputValue: '',
      outputValue: ''
    }
  },
  methods: {
    setData: function () {
      localStorage.setItem('data', this.inputValue)
      this.inputValue = ''
    },
    getData: function () {
      this.outputValue = localStorage.getItem('data')
    }
    // upValue: function (e) {
    //   this.inValue = e.target.value
    // }
    // setData: function () {
    //   alert('v-bind 된 값:' + this.inValue + '를 저장함')
    //   this.temp = this.inValue
    //   this.inValue = ''
    // },
    // getData: function () {
    //   alert('v-on으로 저장된 값 불러오기:' + this.temp)
    //   this.inValue = this.temp
    // }
  }
}
</script>
<style></style>
