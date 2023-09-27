<template>
  <div>
    <div
      class="tabcontent"
      v-for="tab in tabs"
      :key="tab.name"
      :id="tab.name"
      v-show="tab.active"
    >
      <!-- Content for each tab -->
    </div>
    <button
      class="tablinks"
      v-for="tab in tabs"
      :key="tab.name"
      @click="openTab(tab)"
      :class="{ active: tab.active }"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tabs = ref([
      { name: "Tab1", active: true },
      { name: "Tab2", active: false },
      { name: "Tab3", active: false },
      // Add more tabs as needed
    ]);

    const openTab = (selectedTab) => {
      tabs.value.forEach((tab) => {
        tab.active = tab === selectedTab;
      });
    };

    return {
      tabs,
      openTab,
    };
  },
};
</script>

<style scoped>
/* Your CSS styles for tabcontent and tablinks */
</style>
