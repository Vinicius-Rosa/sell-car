<template>
  <div class="carousel_content">
    <span class="page-title">Início</span>
    <h1>{{ item.title }}</h1>
    <span class="carousel_content-price">{{ item.price }}</span>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  name: "CarouselItem",
  props: ["item"],

  beforeUpdate() {
    const span = document.querySelector("span");
    span.classList.add("from-left");

    setTimeout(() => {
      span.classList.remove("from-left");
    }, 600);
  },
};
</script>

<style>
</style>