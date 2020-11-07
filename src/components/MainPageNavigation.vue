<template>
<div class="navigation">
    <router-link :to="{name: 'Home'}"> About </router-link>
    <router-link :to="{name: 'Education'}"> Education </router-link>
    <router-link :to="{name: 'Experience'}"> Experience </router-link>
    <router-link :to="{name: 'Publication'}"> Publications </router-link>
    <router-link :to="{name: 'Skills'}"> Skills </router-link>
    <router-link :to="{name: 'Projects'}"> Projects </router-link>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navigation{
  display: flex;
  width: 75%;
  margin: 0 auto;
  padding: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  overflow: auto;
}

.navigation a {
  color: #333333;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  padding: 0.5rem 0.1rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  display: inline-block;
  position: relative;
}
.navigation a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #3e3e3e;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.navigation a:hover:after { 
  width: 100%; 
  left: 0; 
}
a.router-link-exact-active {
  color: #8F8F8F;
}
a.router-link-exact-active:after {
  background: none;
  width: 0%; 
}
a.router-link-exact-active:hover:after {
  background: none;
  width: 0%; 
}

#index>span{
  float: right;
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  text-align: right;
}

@media screen and (max-width: 700px) {
  .navigation{
    width: 100% !important;
    max-width: 100%;
    height: auto; 
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  #index>span {
    display: none;
  }
  #index:after {
    content: 'home';
  }
  #index{
    font-size: 1rem !important;
    content: 'HOME';
  }
  .index-sidebar a {
    font-size: 1rem;
    float: left;
  }
}

@media screen and (max-width: 400px) {
  .navigation a {
    text-align: center;
    float: none;
  }
}
</style>