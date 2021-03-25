<template>
  <div>
    <div class="modal" :hidden="!showForm" @click="close">
      <div class="contact-form from-left">
        <button class="close-button" @click="shouldHideForm">
          <i class="fas fa-times"></i>
        </button>
        <h1>Fale conosco</h1>

        <div class="input-box">
          <span>Nome:</span>
          <input type="text" placeholder="Digite seu nome" v-model="name" />
        </div>

        <div class="input-box">
          <span>CPF:</span>
          <input
            type="text"
            placeholder="XXX.XXX.XXX-XX"
            maxlength="14"
            v-model="taxNumber"
            @keydown="handleTaxNumber"
          />
        </div>

        <div class="input-box">
          <span>Email:</span>
          <input type="email" placeholder="Digite seu email" v-model="email" />
        </div>

        <div class="input-box">
          <span>Telefone:</span>
          <input
            type="text"
            placeholder="(XX) XXXXX-XXXX"
            maxlength="15"
            v-model="phone"
            @keydown="handlePhone"
          />
        </div>

        <Button text="Enviar" classname="send-button" :onclick="send" />
      </div>
    </div>

    <div :class="`toasty ${error ? 'error' : ''}`" :hidden="!message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Button from "@/components/Button.component.vue";
import fetch from "../services/contact";

import { taxNumberMask, phoneMask } from "@/global/utils";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      taxNumber: "",
      phone: "",

      message: "",
      error: false,
    };
  },
  components: { Button },
  computed: {
    ...mapState({
      showForm: (state) => state.showForm,
      selectedItem: (state) => state.selectedItem,
    }),
  },
  methods: {
    close(e) {
      const thisItem = document.querySelector(".modal");
      if (e.target === thisItem) this.shouldHideForm();
    },

    handleTaxNumber() {
      this.taxNumber = taxNumberMask(this.taxNumber);
    },

    handlePhone() {
      this.phone = phoneMask(this.phone);
    },

    showToasty(status) {
      // if (!status) return;
      if (status === "success") {
        this.message = "Enviado com sucesso!";
        this.error = false;
      }

      if (status === "error") {
        this.message = "Erro inesperado...";
        this.error = true;
      }

      setTimeout(() => {
        const toasty = document.querySelector(".toasty");
        toasty.style.right = 0;
      }, 200);

      setTimeout(() => {
        this.message = "";
      }, 2000);
    },

    send() {
      fetch
        .postMessage({
          announcement_id: this.selectedItem,
          contact: {
            name: this.name,
            email: this.email,
            taxNumber: this.taxNumber,
            phone: this.phone,
          },
        })
        .then(() => {
          this.showToasty("success");
          this.shouldHideForm();
        })
        .catch((error) => {
          this.showToasty("error");
          console.log("error", error);
        });
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
  line-height: 2rem;

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
  position: relative;

  background-color: #fff;
  max-width: 700px;
  width: 100%;
  padding: 50px;
}

.send-button {
  background: #000;
  color: #fff;
}

.close-button {
  position: absolute;
  top: 30px;
  right: 45px;

  padding: 5px;

  box-sizing: border-box;

  cursor: pointer;
  transition: 0.4s;
}

.close-button:hover {
  transform: scale(1.2);
}

.toasty {
  position: fixed;
  top: 20px;
  right: -200px;

  background: #fff;
  color: #000;
  width: 150px;

  padding: 20px;

  z-index: 1000;
  transition: 0.4s;
}

.error {
  color: #dc3545;
}
</style>