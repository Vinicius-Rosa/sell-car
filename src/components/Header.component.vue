<template>
  <header>
    <div class="header_logo-img">
      <img src="@/assets/logo.png" alt="" />
    </div>

    <nav>
      <ul>
        <li>
          <router-link to="/">Início</router-link>
        </li>
        <li>
          <router-link to="/search">Buscar</router-link>
        </li>
        <li>
          <router-link to="/about">Sobre</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  padding: 0 100px;

  background-color: transparent;
  color: #fff;
  z-index: 5;
}

.header_logo-img img {
  max-height: 40px;
}

nav ul {
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

nav ul li a {
  position: relative;
  cursor: pointer;
}

nav ul li a::before {
  content: "";
  position: absolute;
  top: 100%;

  height: 2px;
  width: 0;
  background-color: #fff;

  transition: 0.4s;
}

nav ul li a:hover::before {
  width: 80%;
}
</style>