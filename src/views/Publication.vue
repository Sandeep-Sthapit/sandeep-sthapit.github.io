<template>
  <div class="content">
    <ul class="list">
      <PublicationItem
        v-for="(data, idx) in publicationData"
        :key="idx"
        :publicationItem="data"
      />
    </ul>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { publicationData } from '../assets/data/publication.js'

const PublicationItem = defineAsyncComponent(() =>
  import("../components/PublicationItemContainer.vue")
);

export default {
  components: {
    PublicationItem,
  },
  setup() {
    return {
      publicationData,
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
