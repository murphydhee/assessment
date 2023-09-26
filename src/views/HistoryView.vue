<template>
  <div class="section__layout">
    <div class="history__section__one">
      <div>
        <main-nav-bar />
      </div>
      <div class="history__content__layout">
        <div class="history__header">
          <div>
            <h1 style="font-size: 120px">01.</h1>
          </div>
          <div class="history__text">
            <h2>History</h2>
          </div>
        </div>
        <div>
          <p class="c">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div>
        <carousel />
      </div>
    </div>
    <div class="history__section__two">
      <div class="history__content__two">
        <div class="history__header">
          <div>
            <h1 style="font-size: 120px">02.</h1>
          </div>
          <div class="history__text">
            <h2>Climb</h2>
          </div>
        </div>
        <div class="history__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>
      </div>
    </div>
    <div class="menu__tabs"></div>
    <div class="history__section__three">
      <div>
        <schedule />
      </div>
    </div>
    <div>
      <FooterBar />
    </div>
  </div>
</template>
<script setup>
import MainNavBar from "@/components/MainNavBar.vue";
import Carousel from "@/components/Carousel.vue";
import Schedule from "@/components/Schedule.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>
<style lang="scss" scoped>
.section__layout {
  display: flex;
  flex-direction: column;
}
.history__section__one {
  background-image: url("@/assets/peak.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.history__section__three {
  background-image: url("@/assets/image5.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.history__header {
  display: flex;
  justify-self: flex-start;
}
.history__content__two {
  display: flex;
  gap: 1em;
}
.history__content__layout {
  display: flex;
  position: absolute;
  margin-top: 1em;
  padding: 3em 15em;
  flex-direction: column;
}
.history__content {
  display: flex;
  align-self: center;
}
.history__section__two {
  display: flex;
  padding: 3em 15em;
  gap: 1em;
  flex-direction: row;
}
.history__text {
  display: flex;
  align-items: center;
}
.para__text {
  display: flex;
  p {
    font-size: 14px;
    display: flex;
    align: justify;
  }
}
</style>
