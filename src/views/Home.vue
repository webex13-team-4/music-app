<template>
  <h1>Home</h1>

  <div class="navigation">
    <div class="nav-inner">
      <router-link to="/" class="navigation__link">
        <div class="img-container">
          <img src="@/assets/home.jpg" class="img" />
        </div>
        <div class="explain-container">Home</div>
      </router-link>
    </div>

    <div class="nav-inner">
      <router-link to="/quiz" class="navigation__link">
        <div class="img-container">
          <img src="@/assets/quiz.jpg" class="img" />
        </div>
        <div class="explain-container">クイズ</div></router-link
      >
    </div>

    <div class="nav-inner">
      <router-link to="/palette" class="navigation__link">
        <div class="img-container">
          <img src="@/assets/palette.jpg" class="img" />
        </div>
        <div class="explain-container">パレット</div>
      </router-link>
    </div>

    <div class="nav-inner">
      <router-link to="/memo" class="navigation__link">
        <div class="img-container">
          <img src="@/assets/memo.jpg" class="img" />
        </div>
        <div class="explain-container">メモ</div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  margin: 0 150px;
  justify-content: center;
}

.explain-container {
  text-align: center;
  height: 50px;
}

.nav-inner {
  width: 200px;
  border: solid;
  border-radius: 20%;
  overflow: hidden;
  margin: 20px;
}

.img {
  width: 200px;
  height: 200px;
}
</style>
