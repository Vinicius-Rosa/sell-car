<template>
  <footer>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="" />
      </router-link>
    </div>
    <div class="policies-terms">
      <a href="#" class=""> Termos de uso </a>
      <a href="#" class=""> Política de Privacidade </a>
    </div>
    <div class="medias">
      <a href="#" class="media facebook">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a href="#" class="media instagram">
        <i class="fab fa-instagram-square"></i>
      </a>
      <a href="#" class="media youtube">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #000;
  min-height: 200px;

  padding: 0 100px;
}

a {
  cursor: pointer;
  transition: 0.4s;
}
a:hover {
  color: #d7af70;
}

.logo img {
  max-height: 60px;
}

.policies-terms a {
  display: block;
  margin: 10px 0;
}

.medias a {
  font-size: 2rem;
  margin: 0 10px;
}
</style>