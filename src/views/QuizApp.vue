<template>
  <h1>Vue クイズ</h1>
  <h2 class="title">Q.{{ quiz.text }}</h2>
  <div class="quiz-image">
    <img v-bind:src="quizImagepath" width="300" height="430" />
  </div>
  <div class="question">
    <button
      v-for="question in quiz.questions"
      :key="question.id"
      v-on:click="showAnswer(question)"
      class="question"
    >
      {{ question.text }}
    </button>
  </div>
  <div class="feedback">{{ feedback }}</div>
</template>

<style>
.title {
  text-align: center;
  width: 500px;
  margin: 0 auto;
}

.quiz-image {
  margin-top: 40px;
  text-align: center;
}

.question {
  display: flex;
  height: 80px;
  width: 700px;
  padding: 20px;
  margin: 0 auto;
  justify-content: space-around;
}

button.question {
  margin: 5px;
  height: 110px;
}
.feedback {
  margin-top: 40px;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      feedback: "",
      quiz: {
        text: "これは、シャーロックホームズです。シャーロックホームズが作中で実際に述べた言葉は次のうちどれでしょう？",
        image: "detective.png",
        questions: [
          {
            id: 0,
            text: "君を確実に破滅させることができるなら、公共の利益のために僕は喜んで死を受け入れよう",
            answer:
              "あたり!1893年「最後の事件」での台詞です!宿敵のモリアーティ教授への言葉ですね。名探偵コナンでも登場しました。",
          },
          {
            id: 1,
            text: "想像力はよき下僕だが、主人には不向きだ。もっとも単純な説明がいつもたいてい当たっている。",
            answer:
              "ブッブー。これは、エスキュールポワロの台詞です。オリエント急行殺人事件が有名ですね。",
          },
          {
            id: 2,
            text: "思い込みはいつだって敵だ。見えるものも見えなくしてしまう。",
            answer:
              "残念!東野圭吾さんの有名作品ガリレオシリーズでの言葉です。容疑者Xの献身はおすすめ！",
          },
        ],
      },
    }
  },
  methods: {
    showAnswer(question) {
      this.feedback = question.answer
    },
  },
  computed: {
    quizImagepath() {
      return require("@/assets/" + this.quiz.image)
    },
  },
}
</script>
