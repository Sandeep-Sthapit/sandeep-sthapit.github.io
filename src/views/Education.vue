<template>
  <div class="content">
    <ul class="list">
      <EducationItem
        v-for="(data, idx) in educationData"
        :key="idx"
        :educationItem="data"
      />
    </ul>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { educationData } from '../assets/data/education.js'

const EducationItem = defineAsyncComponent(() =>
  import("../components/EducationItemContainer.vue")
);

export default {
  components: {
    EducationItem,
  },
  setup() {
    return {
      educationData,
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
  height: 100%;
  width: 80%;
  margin: 0 auto;
}
.list {
  margin: 20px 0;
  padding: 0;
  width: 100%;
  display: inline-block;
}
</style>
