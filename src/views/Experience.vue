<template>
  <div class="content">
    <ul class="list">
      <ExperienceItem
        v-for="(data, idx) in experienceData"
        :key="idx"
        :experienceItem="data"
      />
    </ul>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { experienceData } from '../assets/data/experience.js'

const ExperienceItem = defineAsyncComponent(() =>
  import("../components/ExperienceItemContainer.vue")
);

export default {
  components: {
    ExperienceItem,
  },
  setup() {
    return {
      experienceData,
    };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  color: black;
}
.list {
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  display: inline-block;
  width: 100%;
}
.content {
  width: 80%;
  margin: 0 auto;
}
</style>
