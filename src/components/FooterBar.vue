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
        <h4>
          COPYRIGHT 2023.ALL RIGHT RESERVED.
        </h4>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.navbar{
  display: block;
  justify-items: center;
  padding: 0.5em 10em;
  background-color: #5B6B83;
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
</style>