<template>
  <li class="skill-container">
    <h2 class="category">{{ skillItem.category }}</h2>
    <div class="skill-items">
      <span class="item" v-for="(item, idx) in skillItem.items" :key="idx">
        <span>{{ item }}</span>
        <span>{{ isLastItem(idx) }}</span>
      </span>
    </div>
  </li>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    skillItem: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const len = ref(props.skillItem.items.length);
    const isLastItem = (idx) => (idx == len.value - 1 ? "" : ", ");
    return {
      isLastItem,
    };
  },
};
</script>

<style scoped>
.skill-container {
  list-style: none;
  margin: auto;
  margin-bottom: 2rem;
}
.category {
  color: #3f3f3f;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
}
.skill-items {
  width: 100%;
  padding: 0 2rem;
}
.item {
  display: inline;
  font-size: 1rem;
  color: #5e5e5e;
  font-family: "Quicksand", sans-serif;
}
</style>