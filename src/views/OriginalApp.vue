<template>
  <div>
    <h1>好きな犬種を選んでね!</h1>
    <div v-for="(dog, index) in dogs" v-bind:key="index">
      <input type="radio" v-model="breed" :value="dog.breed" />{{ dog.name }}
    </div>
    <button v-on:click="getDogImage">探す</button>
    <div class="outer">
      <div
        class="dog-image"
        v-for="(dogimage, index) in dogimages"
        :key="index"
      >
        <input type="checkbox" v-model="selecteddogs" :value="dogimage" />
        <img :src="dogimage" width="200" height="200" class="img" />
      </div>
    </div>

    <h3>選択中の画像</h3>
    <div class="outer">
      <div
        class="dog-image"
        v-for="(selecteddog, index) in selecteddogs"
        :key="index"
      >
        <img :src="selecteddog" width="200" height="200" class="img" />
      </div>
    </div>
  </div>
  <button v-on:click="selectDogImage">My favoriteに保存する</button>
  <div>
    <h1>My favorite</h1>
    <button v-on:click="favoriteDogImage">My favoriteを見る</button>
    <div class="outer">
      <div
        class="dog-image"
        v-for="(favoritedog, index) in favoritedogs"
        :key="index"
      >
        <img :src="favoritedog" width="200" height="200" class="img" />
      </div>
    </div>
  </div>
</template>

<style>
.outer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.dog-image {
  margin: 20px;
}

.img {
  border-radius: 20%;
}
</style>

<script>
export default {
  data() {
    return {
      dogimages: "",
      breed: "",
      selecteddogs: [],
      favoritedogs: [],
      dogs: [
        {
          breed: "akita",
          name: "秋田犬",
        },
        {
          breed: "hound",
          name: "ハウンド",
        },
        {
          breed: "affenpinscher",
          name: "アッフェンピンシャー",
        },
        {
          breed: "vizsla",
          name: "ビズラ",
        },
      ],
    }
  },
  methods: {
    getDogImage: function () {
      fetch("https://dog.ceo/api/breed/" + this.breed + "/images/random/6")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          this.dogimages = data.message
        })
    },
    selectDogImage: function () {
      for (let i = 0; i < this.selecteddogs.length; i++) {
        this.favoritedogs.push(this.selecteddogs[i])
      }
      localStorage.dogimages = JSON.stringify(this.favoritedogs)
      this.selecteddogs = []
    },
    favoriteDogImage: function () {
      this.favoritedogs = JSON.parse(localStorage.dogimages)
    },
  },
}
</script>
