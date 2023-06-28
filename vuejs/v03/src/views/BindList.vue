<template>
  <div>
    <h1>6. 리스트와 예제</h1>
    <div>
      <select name="" id="" v-model="selData">
        <option
          v-for="city in area"
          :key="city"
          :value="city.name"
          @click="selData = city.name"
        >
          {{ city.name }}
        </option>
      </select>
      <div>선택하신 배송지역은 : {{ selData }}</div>
      <div v-if="selData == '제주'">제주산간지방은 5,000원이 추가됩니다.</div>
    </div>
    <div :v-model="(arr, table)">
      <table>
        <tr class="head">
          <th v-for="head in table" :key="head">{{ head }}</th>
        </tr>
        <tr v-for="(pr, i) in arr" :key="(pr, i)">
          <td>{{ i + 1 }}</td>
          <td>{{ pr.name }}</td>
          <td>{{ pr.category }}</td>
          <td><input v-model.number="pr.price" /></td>
          <td>{{ selData === '제주' ? pr.delivery + 5000 : pr.delivery }}</td>
          <td>
            <input type="number" min="0" v-model="ea[i]" />
          </td>
          <td>
            {{
              (total[i] =
                pr.price * ea[i] +
                (ea[i] > 0
                  ? selData === '제주'
                    ? pr.delivery + 5000
                    : pr.delivery
                  : 0))
            }}
          </td>
        </tr>
        <tr>
          <td class="total" colspan="6">총합</td>
          <td>{{ (sum = total.reduce((a, c) => a + c)) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      area: [
        { name: '서울' },
        { name: '부산' },
        { name: '대전' },
        { name: '대구' },
        { name: '제주' }
      ],
      selData: '',
      ea: [0, 0, 0, 0, 0],
      sum: 0,
      total: [],
      table: ['No.', '카테고리', '제품명', '가격', '배송료', '수량', '합계'],
      arr: [
        {
          name: '기계식키보드',
          category: '액세서리',
          price: 25000,
          delivery: 4000
        },
        {
          name: '무선마우스',
          category: '액세서리',
          price: 12000,
          delivery: 2000
        },
        {
          name: '아이패드',
          category: '노트북/태블릿',
          price: 725000,
          delivery: 5000
        },
        {
          name: '기계식키보드',
          category: '노트북/태블릿',
          price: 25000,
          delivery: 4000
        },
        {
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
.head {
  background: lightblue;
}
.total {
  background: gold;
}
th,
td {
  border: 1px solid black;
  height: 50px;
}
input {
  border: none;
  width: 40px;
  text-align: center;
}
</style>
