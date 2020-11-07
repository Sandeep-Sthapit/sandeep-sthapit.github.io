<template>
  <div class="content">
    <ul class="list">
      <SkillItem
        v-for="(data, idx) in skillsData"
        :key="idx"
        :skillItem="data"
      />
    </ul>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { skillsData } from '../assets/data/skills.js'

const SkillItem = defineAsyncComponent(() =>
  import("../components/SkillsItemContainer.vue")
);

export default {
  components: {
    SkillItem,
  },
  setup() {
    return {
      skillsData,
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
  margin: 1rem 0;
  padding: 0;
  display: inline-block;
}
</style>
