<template>
  <div class="schedule__card">
    <h2>Schedule</h2>
    <div class="event__details">
      <p>25 Nov 2016</p>
      <p>Vestibibrum vviera</p>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.schedule__card {
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border: 1px solid red;
  width: 40%;
}
.event__details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
