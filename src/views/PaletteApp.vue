<template>
  <h1>Vue パレット</h1>
  <div class="app">
    <!--  rgba(赤、緑、青、透明度)色は0~255までの数値、透明度は0~1までの数値 -->
    <!-- background-color: rgba(0, 0, 200, 0.5) -->
    <div
      class="palette"
      v-on:mousemove="changeColor"
      v-on:click="selectColor"
      :style="paletteStyle"
    ></div>
    <p>rgba( {{ red }}, {{ green }}, 200, 0.5 )</p>
    <div class="colors-container">
      <div
        class="mini-palette"
        v-for="(miniPalette, index) in miniPalettes"
        :key="index"
        :style="{
          backgroundColor: `rgba(${miniPalette.red}, ${miniPalette.green}, 200, 0.5)`,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.palette {
  width: 255px;
  height: 255px;
}
.mini-palette {
  width: 60px;
  height: 60px;
}
.colors-container {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  padding-top: 8px;
}
</style>

<script>
export default {
  data() {
    return { red: 0, green: 0, miniPalettes: [] }
  },
  methods: {
    changeColor: function (e) {
      this.red = e.offsetX
      this.green = e.offsetY
    },
    selectColor: function () {
      this.miniPalettes.push({ red: this.red, green: this.green })
    },
  },
  computed: {
    paletteStyle: function () {
      return (
        "background-color:rgba(" + this.red + "," + this.green + ",200, 0.5)"
      )
    },
  },
}
</script>
