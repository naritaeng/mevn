<template>
  <div>
    <h1>미세먼지 정보 페이지(공공API)</h1>
    <div>
      <button @click="fetchData">테스트</button>
      <table>
        <tr>
          <th>지역</th>
          <th>미세먼지</th>
        </tr>
        <tr>
          <td>{{ data.area }}</td>
          <td>{{ data.pm10 }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: {}
    }
  },
  methods: {
    pbData() {
      axios
        .get('/public')
        .then((response) => {
          this.data = response.data
        })
        .catch((e) => {
          console.error(e)
        })
      console.log(this.data)
    }
  }
}
</script>

<style scoped></style>
