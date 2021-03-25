<template>
  <section id="search-container" class="from-blur">
    <div class="search-header">
      <div>
        <h1>Buscar</h1>
        <h2>Seu carro perfeito só aqui!</h2>
      </div>

      <div>
        <button class="filter" @click="toggleFilters()">
          <span class="filter-text">Filtrar por</span>
          <i class="fas fa-filter"></i>
        </button>
        <div class="filter-box" :hidden="hideFilters">
          <span>
            minKm:
            <input type="text" placeholder="0Km" name="minKm" v-model="minKm" />
          </span>
          <span>
            maxKm:
            <input type="text" placeholder="0Km" name="maxKm" v-model="maxKm" />
          </span>
          <span>
            maxPrice:
            <input
              type="text"
              placeholder="R$0"
              name="maxPrice"
              v-model="maxPrice"
            />
          </span>
          <span>
            minPrice:
            <input
              type="text"
              placeholder="R$0"
              name="minPrice"
              v-model="minPrice"
            />
          </span>

          <button class="search-for" @click="fetchAnnouncements()">
            Buscar
          </button>
        </div>
      </div>
    </div>

    <div class="error" :hidden="!hasError">
      <h3>Erro inesperado! Não foi possível carregar o conteúdo :(</h3>
    </div>

    <div class="announcements">
      <div
        class="announcement from-blur"
        v-for="item in announcements"
        :key="item.id"
      >
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
        <button class="buy-now" @click="handleContact(item.id)">
          Entrar em contato!
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import fetch from "../services/announcements";

export default {
  name: "Search",
  data() {
    return {
      announcements: [],
      hasError: false,

      minPrice: null,
      maxPrice: null,
      minKm: null,
      maxKm: null,

      hideFilters: true,
    };
  },

  beforeMount() {
    this.fetchAnnouncements();
  },

  methods: {
    fetchAnnouncements() {
      fetch
        .listAnnouncements({
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          minKm: this.minKm,
          maxKm: this.maxKm,
        })
        .then(({ data }) => {
          this.announcements = data.cars;
        })
        .catch((error) => {
          this.hasError = true;
          console.log("error", error);
        });
    },

    toggleFilters() {
      this.hideFilters = !this.hideFilters;
    },

    handleContact(id) {
      this.setSelectedItem(id);
      this.shouldShowForm();
    },

    ...mapMutations(["shouldShowForm", "setSelectedItem"]),
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

button {
  cursor: pointer;
}

.buy-now {
  background-color: #000;
  color: #fff;
  height: 40px;
}

.filter {
  position: relative;
  padding: 5px 10px;
  transition: 0.4s;

  outline: none;
}

.filter::before {
  content: "";
  position: absolute;
  top: 100%;

  height: 2px;
  width: 0;
  background-color: #fff;

  transition: 0.4s;
}

.filter:hover::before {
  width: 80%;
}
.filter span {
  margin-right: 10px;
}

.filter-box {
  position: absolute;
  right: 100px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: #fff;
  color: #000;

  width: 400px;
  padding: 25px;

  z-index: 10;
}

input {
  background: none;
  border: none;
  outline: none;
  border-bottom: 2px solid #ccc;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  transition: 0.4s;
}

input:focus {
  border-color: #000;
}

.search-for {
  background-color: #000;
  color: #fff;
  height: 40px;
}

.announcements {
  display: flex;
  align-items: center;
  justify-content: center;
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

  min-width: 350px;
  max-width: 450px;
  height: 420px;
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
  align-items: flex-start;
  padding: 25px;
}

.price-km {
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

.error {
  background-color: #fff;
  color: #000;

  padding: 50px;
  margin: 50px 0;

  font-size: 1.2rem;
}

@media (max-width: 1200px) {
  #search-container {
    padding: 100px 50px;
  }

  .filter-box {
    right: 50px;
  }
}

@media (max-width: 850px) {
  .announcements {
    justify-content: center;
  }

  h1 {
    font-size: 4rem;
  }
}

@media (max-width: 450px) {
  .filter-box {
    right: 0;
    width: 100vw;
  }

  .filter-text {
    display: none;
  }
}
</style>