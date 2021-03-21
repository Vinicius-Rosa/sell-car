<template>
  <div data-type="fragment">
    <Carousel />
    <section id="what-we-do">
      <div class="content">
        <h1>O carro perfeito pra você!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          recusandae nam ullam officiis eum amet itaque nesciunt, non sint!
          Tenetur dicta rerum fugiat animi illo reiciendis itaque cum laboriosam
          voluptas!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          recusandae nam ullam officiis eum amet itaque nesciunt, non sint!
          Tenetur dicta rerum fugiat animi illo reiciendis itaque cum laboriosam
          voluptas!
        </p>
        <Button
          classname="see-more"
          text="Ver mais"
          :onclick="() => seeMore()"
        />
      </div>
      <div class="img-container">
        <img :src="vehicle" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Button } from "../components";
import { vehicle } from "@/assets/cars";

export default {
  name: "Home",
  data() {
    return {
      vehicle: vehicle || "",
    };
  },

  methods: {
    seeMore() {
      this.$router.push("/search");
    },
  },
  components: { Carousel, Button },
};
</script>

<style scoped>
#what-we-do {
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 480px;
  width: 80%;

  padding: 50px;
  margin: 50px auto;

  background-color: #fff;
  color: #000;

  text-align: initial;
}

.content {
  width: 40%;
  max-width: 500px;
}

.content h1 {
  font-size: 3.2rem;
  line-height: 4rem;
  font-weight: bold;
  margin-bottom: 50px;
}

.content p {
  line-height: 1.5rem;
}

.content p:first-of-type {
  margin-bottom: 15px;
}

.img-container img {
  width: 100%;
  max-width: 700px;
}

.see-more {
  background-color: #000;
  color: #fff;
}

/* ================== RESPONSIVE ================== */
@media (max-width: 1200px) {
  .img-container img {
    max-width: 400px;
  }

  #what-we-do {
    width: 100%;
    margin: 0;
  }

  .img-container img {
    margin: 0 50px;
  }
}

@media (max-width: 850px) {
  #what-we-do {
    min-width: unset;
    padding: 50px;
    width: 100%;
    flex-direction: column;
  }

  .content h1 {
    font-size: 2rem;
  }

  .content {
    width: 100%;
    min-width: unset;
    max-width: unset;

    text-align: justify;
  }

  .img-container img {
    margin: 0;
    margin-top: 50px;
  }
}
</style>