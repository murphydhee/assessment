<template>
  <div class="home__section">
    <div>
      <nav-bar />
    </div>
    <p>Home View</p>
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
</style>
