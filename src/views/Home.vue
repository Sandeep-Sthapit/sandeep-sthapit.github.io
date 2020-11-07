<template>
  <div class="home">
    <AvatarIcon />
    <div class="content">
      <p>Hello, I am Sandeep.</p>
      <p>
        I am a Research Assistant at
        <a class="green-link" href="https://www.naamii.com.np/" target="blank"
          >Nepal Applied Mathematics and Informatics Institute for Research
          (NAAMII)</a
        >. I am doing research in Artificial Intelligence in Education under the
        supervision of Dr. Dovan Rai. My current research focuses on evaluating
        the effectiveness of various interventions in Intelligent Tutoring Systems
        with a particular focus on developing countries like Nepal.
      </p>
      <p>
        I am also interested in travelling, playing games and bodyweight fitness.
      </p>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const AvatarIcon = defineAsyncComponent(() =>
  import("../components/AvatarIcon.vue")
);

export default {
  components: {
    AvatarIcon,
  },
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
