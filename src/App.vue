<template>
  <div class="main-container">
    <MobileNavigation :class="{ openedNav: isMobile }" @click="displayMenu" />
    <div class="second-container">
      <div class="header-item">
        <img
          class="hamburger-nav"
          src="./assets/menu.svg"
          @click="displayMenu"
        />
        <MainPageTitle />
        <MainPageNavigation />
      </div>
      <div class="content-container">
        <div class="contents">
          <router-view />
        </div>
        <PageFooterContact />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";

const MainPageTitle = defineAsyncComponent(() =>
  import("./components/MainPageTitle.vue")
);
const MainPageNavigation = defineAsyncComponent(() =>
  import("./components/MainPageNavigation.vue")
);
const MobileNavigation = defineAsyncComponent(() =>
  import("./components/MainPageNavigationMobile.vue")
);
const PageFooterContact = defineAsyncComponent(() =>
  import("./components/PageFooterContact.vue")
);
export default {
  components: {
    MainPageTitle,
    MainPageNavigation,
    PageFooterContact,
    MobileNavigation,
  },
  setup() {
    const isMobile = ref(false);
    const displayMenu = () => {
      isMobile.value = !isMobile.value;
    };
    return {
      isMobile,
      displayMenu,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap");

html {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #fafafa;
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
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.second-container {
  max-width: 1080px;
  display: flex;
  flex-direction: column;
}
.header-item {
  position: fixed;
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  background-color: #fafafa;
  height: 180px;
  left: 50%;
  transform: translateX(-50%);
}
.content-container {
  margin-top: 180px;
  display: flex;
  flex-direction: column;
}
.contents {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.green-link {
  color: #41b883;
  transition: 0.2s ease-in-out;
  text-decoration: none;
}
.green-link:hover {
  color: #d49a89;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.mob-nav {
  display: none !important;
}
.hamburger-nav {
  display: none;
  font-size: 1.2rem;
  color: #5e5e5e;
  height: 3vh;
  border: none;
  background: none;
  margin: 0;
  margin-left: 3vh;
  padding: 0;
  padding-bottom: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
@media screen and (max-width: 1080px) {
  .main-container {
    width: 100%;
  }
  .header-item {
    width: 100%;
    height: 150px;
  }
  .content-container {
    margin-top: 150px;
  }
}
@media screen and (max-width: 640px) {
  .hamburger-nav {
    display: block;
  }
  .main-container {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .second-container {
    width: 100vw;
    min-width: 100vw;
  }
  .header-item {
    position: relative;
    width: 100vw;
    height: 60px;
    flex-direction: row;
    align-items: center;
  }
  .header-item > div {
    margin-right: 6vh;
  }
  .content-container {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
  }
}
</style>
