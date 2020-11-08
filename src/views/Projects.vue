<template>
  <div class="content">
    <ul class="list">
      <ProjectItem
        v-for="(data, idx) in projectsData"
        :key="idx"
        :projectItem="data"
      />
    </ul>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { projectsData } from '../assets/data/projects.js'

const ProjectItem = defineAsyncComponent(() =>
  import("../components/ProjectItemContainer.vue")
);

export default {
  components: {
    ProjectItem,
  },
  setup() {
    return {
      projectsData,
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
  width: 100%;
  display: inline-block;
}
</style>
