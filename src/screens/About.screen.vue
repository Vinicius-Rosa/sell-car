<template>
  <section id="container">
    <h1>Sobre</h1>
    <p>Opa! Bão?</p>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#container {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: blue;

  z-index: 1000000;
}
</style>