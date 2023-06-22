<template>
  <div>
    <button v-for="p in pages" :key="p" :class="p" @click="page = p">
      {{ p }}
    </button>
    <!-- v-for를 활용해 return값 pages의 쌍 배열안 요소를 각 버튼에 클래스를 주며 만든다. 그리고 각 버튼을 클릭했을 때 return값에 있는 page의 값을 변하게한다. -->
    <div v-for="(g, i) in pages" :key="i">
      <img
        v-if="g === page"
        :src="'./sample' + (i + 1) + '.jpg'"
        alt="여름사진"
      />
      <!-- img를 퍼블릭 폴더에 넣어야 경로가 바뀌지 않음 -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  }
}
</script>
<style>
button {
  scale: 200%;
  margin: 30px;
  background: #fff;
  border: 1px solid gray;
  cursor: pointer;
}
button:hover {
  background: #dff444;
}
button:active {
  color: #fff;
  background: #380d68;
}
img {
  width: 500px;
  height: 500px;
}
</style>
