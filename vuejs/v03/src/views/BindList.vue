<template>
  <div>
    <h1>6. 리스트와 예제</h1>
    <select name="" id="" v-model="data">
      <option
        @click="data = city.name"
        v-for="city in area"
        :key="city"
        :value="city.name"
      >
        {{ city.name }}
      </option>
    </select>
    <div>선택하신 배송지역은 : {{ data }}</div>
    <div v-if="data == '제주'">제주산간지방은 5,000원이 추가됩니다.</div>
  </div>
  <div :v-model="(arr, table, area)">
    <table>
      <th v-for="head in table" :key="head">{{ head }}</th>
      <tr v-for="pr in arr" :key="pr">
        <td>{{ pr.no }}</td>
        <td>{{ pr.name }}</td>
        <td>{{ pr.category }}</td>
        <td>{{ pr.price }}</td>
        <td>{{ pr.delivery }}</td>
        <td>{{}}</td>
        <td>{{}}</td>
      </tr>
      <tr>
        <td colspan="6"></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      area: [
        { name: '서울', delivery: 1000 },
        { name: '부산', delivery: 3000 },
        { name: '대전', delivery: 2000 },
        { name: '대구', delivery: 3000 },
        { name: '제주', delivery: 5000 }
      ],
      data: '',
      table: ['No.', '카테고리', '제품명', '가격', '배송료', '수량', '합계'],
      arr: [
        {
          no: 1,
          name: '기계식키보드',
          category: '액세서리',
          price: 25000,
          delivery: 4000
        },
        {
          no: 2,
          name: '무선마우스',
          category: '액세서리',
          price: 12000,
          delivery: 2000
        },
        {
          no: 3,
          name: '아이패드',
          category: '노트북/태블릿',
          price: 725000,
          delivery: 9000
        },
        {
          no: 4,
          name: '기계식키보드',
          category: '노트북/태블릿',
          price: 25000,
          delivery: 4000
        },
        {
          no: 5,
          name: '무선충전기',
          category: '액세서리',
          price: 42000,
          delivery: 3000
        }
      ]
    }
  }
}
</script>
<style scoped>
table {
  width: 80%;
  margin: 10px auto;
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
  height: 50px;
}
</style>
