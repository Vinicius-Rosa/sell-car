<template>
  <div class="modal" :hidden="!showForm" @click="close">
    <div class="contact-form from-left">
      <h1>Fale conosco</h1>

      <div class="input-box">
        <span>Nome:</span>
        <input type="text" />
      </div>

      <div class="input-box">
        <span>CPF:</span>
        <input type="text" />
      </div>

      <div class="input-box">
        <span>Email:</span>
        <input type="text" />
      </div>

      <div class="input-box">
        <span>Email:</span>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Contact",
  computed: {
    ...mapState({
      showForm: (state) => state.showForm,
    }),
  },

  methods: {
    close(e) {
      const thisItem = document.querySelector(".modal");
      if (e.target === thisItem) this.shouldHideForm();
    },
    ...mapMutations(["shouldHideForm"]),
  },
};
</script>

<style scoped>
.modal {
  position: fixed;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);
  color: #000;

  text-align: start;

  z-index: 1000;
}

h1 {
  font-size: 2rem;
  text-align: center;

  margin-bottom: 50px;
}

.input-box {
  margin-bottom: 25px;
}

input {
  background: none;
  border: none;
  outline: none;
  border-bottom: 2px solid #ccc;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  width: 100%;

  transition: 0.4s;
}

input:focus {
  border-color: #000;
}

.contact-form {
  background-color: #fff;
  max-width: 700px;
  width: 100%;
  padding: 50px;
}
</style>