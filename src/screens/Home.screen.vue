<template>
  <Fragment>
    <header>
      <div class="header_logo-img">
        <img src="../assets/logo.png" alt="" />
      </div>

      <nav>
        <ul>
          <li>
            <button>Início</button>
          </li>
          <li>
            <button>Buscar</button>
          </li>
          <li>
            <button>Sobre</button>
          </li>
        </ul>
      </nav>
    </header>

    <Carousel />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { Carousel } from "../components";

export default {
  name: "Home",
  components: { Fragment, Carousel },
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

nav ul li button {
  position: relative;
  cursor: pointer;
}

nav ul li button::before {
  content: "";
  position: absolute;
  top: 100%;

  height: 2px;
  width: 0;
  background-color: #fff;

  transition: 0.4s;
}

nav ul li button:hover::before {
  width: 80%;
}
</style>