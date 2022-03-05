<template>
  <h1>Home</h1>

  <div class="navigation">
    <div
      class="nav-inner"
      v-for="content in contents"
      :key="content.id"
      v-on:mouseover="mouseOverAction(content)"
      v-on:mouseleave="mouseLeaveAction(content)"
    >
      <router-link :to="`/${content.name}`" class="navigation__link">
        <img :src="require(`@/assets/${content.name}.jpg`)" class="img" />
        <transition>
          <p v-if="content.show">{{ content.title }}</p>
        </transition>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  margin: 0 150px;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-inner {
  width: 250px;
  height: 250px;
  border: solid;
  border-radius: 20%;
  overflow: hidden;
  margin: 20px;
  position: relative;
}

.img {
  width: 250px;
  height: 250px;
  transition: 2s;
}
.navigation__link:hover .img {
  filter: blur(10px);
}
.nav-inner p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: white;
}
.v-enter-active {
  transition: opacity 2s;
  opacity: 0;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 2s;
}
.v-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  data() {
    return {
      contents: [
        {
          id: 0,
          title: "Quiz",
          show: false,
          name: "quiz",
        },
        {
          id: 1,
          title: "Palette",
          show: false,
          name: "palette",
        },
        {
          id: 2,
          title: "Memo",
          show: false,
          name: "memo",
        },
        {
          id: 3,
          title: "Dog Album",
          show: false,
          name: "original",
        },
      ],
    }
  },
  methods: {
    mouseOverAction(content) {
      content.show = true
    },
    mouseLeaveAction(content) {
      content.show = false
    },
  },
}
</script>
