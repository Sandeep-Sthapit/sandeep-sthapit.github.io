<template>
  <div class="container">
	<div class="divider"></div>
    <p class="contact-text">Feel free to reach out</p>
    <div class="socials">
      <a href="mailto:sandeepsthapit@gmail.com" target="_top">
        <img src="../assets/gmail.svg" />
      </a>
      <a href="https://github.com/Sandeep-Sthapit" target="_blank">
        <img src="../assets/github-logo.svg" />
      </a>
      <a href="www.linkedin.com/in/sandeep-sthapit" target="_blank">
        <img src="../assets/linkedin.svg" />
      </a>
      <a href="https://www.facebook.com/sandeepsthapit" target="_blank">
        <img src="../assets/fb.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  margin-top: 1rem;
  padding-bottom: 2rem;
}
.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 2rem;
  margin: 0 auto;
}
.socials > a {
  height: 100%;
  width: 2rem;
  height: 2rem;
  background-color: #333333;
  border-radius: 50%;
  margin-right: 0.75rem;
  transition: 0.2s ease-in-out;
}
.socials img {
  height: 100%;
}
.socials:hover a {
  background-color: #777777;
}
.socials a:hover {
  background-color: #41b883;
}
.divider{
	height: 1px;
	width: 50%;
	background-color: #8f8f8f
}
.contact-text{
	font-size: 1rem;
	padding: 0;
	margin: 0.5rem 0;
	margin-top: 1rem;
  color: "#4e4e4e";
  font-family: 'Open Sans', sans-serif;
}
</style>>