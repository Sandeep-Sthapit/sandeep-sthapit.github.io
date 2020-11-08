<template>
  <div class="main-title-container">
    <router-link class="home-link" :to="{ name: 'Home' }">
      <h1 class="main-title">Sandeep Sthapit</h1>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap");

.main-title-container {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
}
.home-link {
  text-decoration: none;
}
.home-link:visited {
  color: #8b9c9f;
}
.main-title {
  font-size: 3rem;
  /* color: #8B9C9F; */
  color: #89beb3;
  margin: 0 auto;
  text-transform: uppercase;
  /* font-family: 'Viaoda Libre', cursive; */
  /* font-family: 'Poiret One', cursive; */
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
}
@media screen and (max-width: 1080px) {
  .main-title {
    padding-top: 15px;
    font-size: 2.4rem;
  }
}

@media screen and (max-width: 640px) {
  .main-title {
    font-size: 1.2rem;
  }
}
</style>