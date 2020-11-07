<template>
  <div class="main-container">
    <div class="header-item">
      <MainPageTitle />
      <MainPageNavigation />
    </div>
    <div class="content-container">
      <div class="contents">
        <router-view/>
      </div>
      <PageFooterContact />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const MainPageTitle = defineAsyncComponent(
  () => import("./components/MainPageTitle.vue")
);
const MainPageNavigation = defineAsyncComponent(
  () => import("./components/MainPageNavigation.vue")
);
const PageFooterContact = defineAsyncComponent(
  () => import("./components/PageFooterContact.vue")
);
export default {
  components: {
    MainPageTitle,
    MainPageNavigation,
    PageFooterContact
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap');


html {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #FAFAFA;
}

body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: "Open Sans", sans-serif;
}

body * {
  box-sizing: border-box;
  position: relative;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.main-container {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.header-item{
  position: relative;
  width: 100%;
  position: fixed;
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  background-color: #FAFAFA;
  height: 180px;
}
.content-container{
  margin-top: 180px;
  display: flex;
  flex-direction: column;
}
.contents{
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.green-link{
	color: #41B883;
  transition: 0.2s ease-in-out;
  text-decoration: none;
}
.green-link:hover{
  color: #D49A89
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
