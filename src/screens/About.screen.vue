<template>
  <section id="about-container" class="from-blur">
    <h1>Sobre nós</h1>
    <h2>Nosso compromisso é com você!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ratione
      iusto dolorem tenetur impedit nobis nesciunt ducimus, odit dicta minus
      provident officiis repellendus labore accusamus harum, consectetur
      assumenda perferendis numquam. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Itaque ratione iusto dolorem tenetur impedit nobis
      nesciunt ducimus, odit dicta minus provident officiis repellendus labore
      accusamus harum, consectetur assumenda perferendis numquam.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ratione
      iusto dolorem tenetur impedit nobis nesciunt ducimus, odit dicta minus
      provident officiis repellendus labore accusamus harum, consectetur
      assumenda perferendis numquam. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Itaque ratione iusto dolorem tenetur impedit nobis
      nesciunt ducimus, odit dicta minus provident officiis repellendus labore
      accusamus harum, consectetur assumenda perferendis numquam.
    </p>

    <div class="partners">
      <div class="partner">
        <div id="ceo" class="img" />
        <div class="content">
          <h3>Vinicius de Oliveira</h3>
          <span>CEO</span>
          <br />
          <span class="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure maxime nemo incidunt recusandae cumque similique error veniam
            reiciendis.
          </span>
        </div>
      </div>

      <div class="partner">
        <div id="cto" class="img" />
        <div class="content">
          <h3>Vinicius Rosa</h3>
          <span>CTO</span>
          <br />
          <span class="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure maxime nemo incidunt recusandae cumque similique error veniam
            reiciendis.
          </span>
        </div>
      </div>

      <div class="partner">
        <div id="product-designer" class="img" />
        <div class="content">
          <h3>Vini R. Rafael</h3>
          <span>Product Designer</span>
          <br />
          <span class="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure maxime nemo incidunt recusandae cumque similique error veniam
            reiciendis.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about-container {
  padding: 100px 100px;

  z-index: 1000000;
}

h1 {
  text-align: initial;
  font-size: 5rem;
}

h2 {
  text-align: initial;
}

p {
  background-color: #fff;
  color: #000;
  padding: 50px;

  width: 100%;
  /* calc(100% - 100px); */
  margin: 50px auto;

  text-align: justify;
  line-height: 1.5rem;
}

.partners {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 50px;

  margin: 0;
}

.partner {
  display: flex;
  flex: 1;
  text-align: initial;

  background-color: #fff;
  color: #000;
  padding: 50px;

  min-width: 400px;
  /* width: 100%; */
}

.partner h3 {
  font-weight: bold;
}

.partners span {
  color: #bbbbbb;
}

.partners .description {
  display: block;
  margin-top: 20px;
}

.partner .content {
  margin-left: 20px;
  max-width: 60%;
}

.img {
  border-radius: 100px;
  width: 120px;
  height: 120px;
}

#ceo {
  background: url("../assets/partners/partner3.jpeg");
  background-size: cover;
  background-position: top center;
}

#cto {
  background: url("../assets/partners/partner1.jpg");
  background-size: cover;
  background-position: top center;
}

#product-designer {
  background: url("../assets/partners/partner2.jpg");
  background-size: cover;
  background-position: top center;
}

@media (max-width: 1200px) {
  #about-container {
    padding: 100px 50px;
  }
}

@media (max-width: 850px) {
  #about-container {
    padding: 100px 0;
  }

  p {
    width: calc(100% - 100px);
  }

  h1 {
    margin-left: 50px;
    font-size: 4rem;
  }

  h2 {
    margin-left: 55px;
  }
}

@media (max-width: 500px) {
  p {
    padding: 25px;
  }
  .img {
    border-radius: 100px;
    width: 80px;
    height: 80px;
  }

  .partner {
    padding: 25px;
    min-width: 300px;
  }
}
</style>