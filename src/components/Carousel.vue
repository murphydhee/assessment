<template>
  <div class="carousel">
    <div class="carousel__inner">
      <div
        v-for="(image, index) in visibleImages"
        :key="index"
        class="carousel__item"
      >
        <img :src="image" alt="Carousel Slide" />
      </div>
    </div>
    <div class="carousel__dots">
      <span
        v-for="(dot, index) in image"
        :key="index"
        @click="changeSlide(index)"
        :class="{ active: currentIndex === index }"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";

const image = ref([image1, image2, image3, image4, image5]);

const currentIndex = ref(0);

const visibleImages = computed(() => {
  const startIndex = currentIndex.value;
  const endIndex = startIndex + 3;
  return image.value.slice(startIndex, endIndex);
});

const changeSlide = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: #5c6a88;
  opacity: 90%;
  padding: 1em;
  margin-bottom: 1em;
}

.carousel__inner {
  display: flex;
  overflow: hidden;
}

.carousel__item {
  flex: 1;
  margin: 0 10px;
  transition: transform 0.3s ease;
}

.carousel__item img {
  width: 200px;
  height: 150px;
}

.carousel__dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.carousel__dots span {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel__dots span.active {
  background-color: #007bff;
}
</style>
