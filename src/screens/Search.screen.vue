<template>
  <section id="search-container">
    <div class="search-header">
      <div>
        <h1>Buscar</h1>
        <h2>Seu carro perfeito só aqui!</h2>
      </div>

      <button>Filtrar por</button>
    </div>

    <div class="announcements">
      <div class="announcement" v-for="item in announcements" :key="item.id">
        <div class="announcement_img">
          <img
            :src="
              require(`../data/announcements/${item.image.replace(',', '.')}`)
            "
            alt="carro"
          />
        </div>
        <div class="content">
          <div>
            <h3>{{ item.name }}</h3>
            <span>{{ item.brand }}</span>
          </div>
          <div class="price-km">
            <h3>R${{ item.price }}</h3>
            <span>{{ item.km }}Km</span>
          </div>
        </div>
        <button class="buy-now">Compre já!</button>
      </div>
    </div>
  </section>
</template>

<script>
import fetch from "../services/announcements";

export default {
  name: "Search",
  data() {
    return {
      announcements: [],
    };
  },

  beforeMount() {
    fetch.listAnnouncements().then((response) => {
      this.announcements = response.cars;
    });
  },
};
</script>

<style scoped>
#search-container {
  min-height: calc(100vh - 80px);
  padding: 100px 100px;
  text-align: start;
}

h1 {
  font-size: 5rem;
}

h2 {
  text-align: initial;
  margin-left: 5px;
}

.search-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.buy-now {
  background-color: #000;
  color: #fff;
  height: 40px;

  cursor: pointer;
}

.announcements {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 50px;

  margin: 0;
}

.announcement {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: initial;

  background-color: #fff;
  color: #000;

  max-width: 350px;
  height: 450px;
  margin-top: 50px;
}

.announcement_img {
  max-width: 100%;
}
.announcement_img img {
  width: 100%;
  height: 250px;
}

.announcement .content {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}

.announcement .content .price-km h3,
.announcement .content .price-km span {
  text-align: end;
}

.announcement h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.announcements span {
  color: #bbbbbb;
}

.announcements .description {
  display: block;
  margin-top: 20px;
}

@media (max-width: 1200px) {
  #search-container {
    padding: 100px 50px;
  }
}

@media (max-width: 850px) {
  #search-container {
    padding: 100px 0;
  }

  h1 {
    margin-left: 50px;
    font-size: 4rem;
  }

  h2 {
    margin-left: 55px;
  }
}
</style>