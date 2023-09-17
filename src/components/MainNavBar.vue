<template>
  <div class="navbar">
    <div class="navbar__layout">
      <!--    Logo-->
      <div class="nav__logo">
        <img src="../assets/logo.png" alt="Logo">
        <img src="../assets/la-mountains.png" alt="LA-Mountains">
      </div>
      <!--    Links-->
      <div class="nav__links">
        <router-link to="/history">
          <h4 class="link__text">01. History</h4>
        </router-link>
        <router-link to="/team">
          <h4 class="link__text">02. Team</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import {RouterLink} from "vue-router";
</script>
<style lang="scss" scoped>
.navbar{
  display: block;
  justify-items: center;
  padding: 0.5em 10em;
  background-color: aliceblue;
}
.nav__logo{
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.navbar__layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav__links {
  display: flex;
  flex-direction: row;
  gap: 2em;
}
.link__text {
  color: #5B6B83;
}
</style>