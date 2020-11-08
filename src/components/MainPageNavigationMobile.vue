<template>
  <div class="mobile-navigation">
    <router-link :to="{ name: 'Home' }"> About </router-link>
    <router-link :to="{ name: 'Education' }"> Education </router-link>
    <router-link :to="{ name: 'Experience' }"> Experience </router-link>
    <router-link :to="{ name: 'Publication' }"> Publications </router-link>
    <router-link :to="{ name: 'Skills' }"> Skills </router-link>
    <router-link :to="{ name: 'Projects' }"> Projects </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mobile-navigation {
  display: none;
  min-width: 0vw;
  width: 0;
  height: 100vh;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-right: 2px solid #eee;
  transition: 0.3s ease-in;
  overflow: hidden;
}

.mobile-navigation a {
  color: #5e5e5e;
  border-bottom: 1px solid #eee;
  width: 100%;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: "Open Sans", sans-serif;
  display: inline-block;
  position: relative;
}

.openedNav {
  min-width: 80vw;
  width: 80vw;
}

@media screen and (max-width: 640px) {
  .mobile-navigation {
    display: flex!important;
  }
}
</style>