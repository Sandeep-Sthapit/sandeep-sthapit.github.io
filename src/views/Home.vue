<template>
  <div class="home">
    <AvatarIcon :imageItem="introductionData.avatar"/>
    <div class="content">
      <p v-for="(text, idx) in introductionData.texts" :key="idx" v-html="text">
      </p>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { introductionData } from '../assets/data/about.js'

const AvatarIcon = defineAsyncComponent(() =>
  import("../components/AvatarIcon.vue")
);

export default {
  components: {
    AvatarIcon,
  },
  setup () {
    return {
      introductionData
    }
  }
};
</script>

<style scoped>
.home{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  color: black;
}
.content{
  width: 80%;
  font-family: 'Quicksand', sans-serif;
}

</style>
