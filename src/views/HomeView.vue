<template>
  <div class="home__section">
    <div>
      <nav-bar />
    </div>
    <div class="header__text__layout">
      <h1 class="header__text__one">LOS ANGELES</h1>
      <h1 class="header__text__two">MOUNTAINS</h1>
    </div>
  </div>
  <div>
    <footer-bar />
  </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>
<style lang="scss" scoped>
.home__section {
  background-image: url("@/assets/bg-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.header__text__layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-items: center;
  height: 100vh;

  .header__text__one {
    font-size: 85px;
  }
  .header__text__two {
    font-size: 85px;
  }
}
</style>
