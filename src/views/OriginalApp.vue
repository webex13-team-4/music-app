<template>
  <h1>Dog Album</h1>
  <!-- 写真選ぶタグとアルバム開くタグ -->
  <div class="head">
    <label
      v-on:click="chooseDogImage"
      class="tag-label"
      :class="{ underline: isActive }"
      >search dog</label
    >
    <label
      v-on:click="favoriteDogImage"
      class="tag-label"
      :class="{ underline: !isActive }"
      >My Album</label
    >
  </div>

  <div v-if="isActive">
    <h2>Step1 気になる犬種を選んでね!</h2>
    <div class="outer">
      <!-- クリックしたらその犬種の画像表示される -->
      <div
        v-for="(dog, index) in dogs"
        v-bind:key="index"
        v-on:click="getDogImage(dog)"
        class="dog-select"
      >
        <img
          :src="require(`@/assets/${dog.breed}.jpg`)"
          class="dog-image"
          :class="{ blur: dog.select }"
        />
        <p>{{ dog.name }}</p>
      </div>
    </div>
    <h2>Step2 好きな画像をMy Albumに保存しよう!</h2>
    <div class="outer">
      <!-- AddDogで選択中の画像の配列selecteddogsImageに入れていく -->
      <div
        v-for="(dogimage, index) in dogimages"
        v-on:click="AddDog(dogimage)"
        :key="index"
        class="dog-select"
      >
        <img
          :src="dogimage"
          class="dog-image"
          :class="{ blur: this.selecteddogs.includes(dogimage) }"
        />
        <!-- 選択した画像にチェック -->
        <p v-if="this.selecteddogs.includes(dogimage)">✔︎</p>
      </div>
    </div>
    <div class="button-wrapper">
      <button
        v-if="selecteddogs.length >= 1"
        v-on:click="selectDogImage"
        class="savebutton"
      >
        My Albumに保存する
      </button>
    </div>
  </div>

  <div v-if="!isActive">
    <div class="outer">
      <div
        v-for="(favoritedog, index) in favoritedogs"
        :key="index"
        v-on:click="DeleteDog(favoritedog)"
        class="dog-select"
      >
        <img :src="favoritedog" width="200" height="200" class="dog-image" />
        <p v-if="this.deletedogs.includes(favoritedog)">✔︎</p>
      </div>
    </div>
    <div class="button-wrapper">
      <button v-if="deletedogs.length >= 1" v-on:click="deleteDogImage">
        My Albumから削除する
      </button>
    </div>
  </div>
</template>

<style scoped>
.underline {
  border-bottom: solid 3px;
  width: 100px;
  text-align: center;
  transition: all 0.3s ease;
}
.head {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}
.tag-label {
  margin: 10px;
}

.tag-label:hover {
  color: gray;
}

.outer {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.dog-image {
  border-radius: 20%;
  width: 200px;
  height: 200px;
}

.dog-select:hover .dog-image {
  filter: blur(4px);
}

.dog-select {
  position: relative;
  border-radius: 20%;
  width: 200px;
  height: 200px;
  margin: 20px;
}

.dog-select p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: white;
}

.blur {
  filter: blur(4px);
}

.button-wrapper {
  margin-top: 50px;
  text-align: center;
}

.savebutton {
  font-size: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      dogimages: [],
      // ↓追加時に選択中の画像
      selecteddogs: [],
      // ↓アルバムの画像
      favoritedogs: [],
      // ↓削除時に選択中の画像
      deletedogs: [],
      isActive: true,
      selectbreed: "",
      dogs: [
        {
          breed: "akita",
          name: "秋田犬",
          select: false,
        },
        {
          breed: "hound",
          name: "ハウンド",
          select: false,
        },
        {
          breed: "affenpinscher",
          name: "アッフェンピンシャー",
          select: false,
        },
        {
          breed: "vizsla",
          name: "ビズラ",
          select: false,
        },
        {
          breed: "african",
          name: "アフリカン",
          select: false,
        },
        {
          breed: "maltese",
          name: "マルチーズ",
          select: false,
        },
        {
          breed: "doberman",
          name: "ドーベルマン",
          select: false,
        },
        {
          breed: "papillon",
          name: "パピヨン",
          select: false,
        },
        {
          breed: "pomeranian",
          name: "ポメラニアン",
          select: false,
        },
        {
          breed: "samoyed",
          name: "サモエド",
          select: false,
        },
      ],
    }
  },
  methods: {
    // ↓アルバム表示
    favoriteDogImage: function () {
      this.isActive = false
      this.favoritedogs = JSON.parse(localStorage.dogimages)
    },
    // ↓選ぶ画面表示
    chooseDogImage: function () {
      this.isActive = true
    },
    // ↓画像をAPIで取ってくる
    getDogImage: function (dog) {
      if (this.selectbreed) {
        this.selectbreed.select = false
      }
      this.selectbreed = dog
      dog.select = true
      if (dog.select) {
        fetch("https://dog.ceo/api/breed/" + dog.breed + "/images/random/10")
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            this.dogimages = data.message
          })
      }
    },
    // ↓アルバムに追加する画像を選ぶ
    AddDog: function (dogimage) {
      if (this.selecteddogs.includes(dogimage)) {
        this.selecteddogs = this.selecteddogs.filter((elm) => {
          return elm !== dogimage
        })
      } else {
        this.selecteddogs.push(dogimage)
      }
    },
    // ↓アルバムに画像を追加
    selectDogImage: function () {
      for (let i = 0; i < this.selecteddogs.length; i++) {
        this.favoritedogs.push(this.selecteddogs[i])
      }
      localStorage.dogimages = JSON.stringify(this.favoritedogs)
      this.selecteddogs = []
      this.isActive = false
    },
    // ↓アルバムから削除する画像を選ぶ
    DeleteDog: function (dog) {
      if (this.deletedogs.includes(dog)) {
        this.deletedogs = this.deletedogs.filter((elm) => {
          return elm !== dog
        })
      } else {
        this.deletedogs.push(dog)
      }
    },
    // ↓アルバムから画像を削除する
    deleteDogImage: function () {
      for (let i = 0; i < this.deletedogs.length; i++) {
        this.favoritedogs = this.favoritedogs.filter((elm) => {
          return elm !== this.deletedogs[i]
        })
      }
      localStorage.dogimages = JSON.stringify(this.favoritedogs)
      this.deletedogs = []
    },
  },
}
</script>
