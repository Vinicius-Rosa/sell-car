<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from "@/components";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>


<style>
@import url("global/styles/reset.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  /* color: #595959; */
  color: #fff;

  background: #d7af70;
}
</style>