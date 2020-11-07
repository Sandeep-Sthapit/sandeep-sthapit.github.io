<template>
  <a class="sample-container" :href="work.url" target="_blank">
    <div class="sample-label">
      <p class="sample-text">{{ work.text }}</p>
    </div>
    <img class="sample-img" :src="work.image" alt="work.text" />
  </a>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.sample-container {
  display: block;
  text-decoration: none;
  margin: 1rem;
}
.sample-container:hover .sample-label {
  opacity: 95%;
}
.sample-img {
  width: 15rem;
}
.sample-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  opacity: 0;
  transition: 0.5s ease-in-out;
  font-family: "Open Sans", sans-serif;
}
.sample-text {
  color: #333;
  font-size: 1.1rem;
  text-decoration: underline;
}
</style>