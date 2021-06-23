<template>
  <div class="form">
    <div class="input"><input type="text" id="id" readonly /></div>
    <div class="input">
      <input
        type="text"
        id="name"
        placeholder="Maria Lídia"
        v-model="person.name"
      />
    </div>
    <div class="input">
      <input
        type="text"
        name="cpf"
        id="cpf"
        placeholder="000.000.000-00"
        :disabled="person.id !== ''"
        v-model="person.cpf"
        maxlength="14"
      />
    </div>
    <div class="input">
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Rua Bela..."
        v-model="person.address"
      />
    </div>
    <button class="btn-save" @click="save">Salvar</button>
    <router-link to="/persons" class="btn-cancel">Cancelar</router-link>
  </div>
</template>

<script>
const host = "http://localhost:3000";
import axios from "axios";
export default {
  data() {
    return {
      person: {
        id: "",
        name: "",
        cpf: "",
        address: "",
      },
    };
  },
  methods: {
    async save() {
      try {
        const method = this.person.id ? "put" : "post";
        await axios[method](`${host}/person/${this.person.id}`, this.person);
        this.$router.push("/persons");
      } catch (error) {
        console.error(error);
      }
    },
    async list() {
      try {
        if (this.$route.params.id) {
          axios
            .get(`${host}/person/${this.$route.params.id}`)
            .then((response) => {
              this.person = response.data[0];
            });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.list();
  },
};
</script>

<style>
.form {
  margin: 100px 0;
  height: 500px;
}
input {
  border: none;
  background: none;
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 20px;
  color: white;
}
input::placeholder {
  color: rgb(168, 165, 165);
}
.input {
  width: 500px;
  margin: 5px auto;
  border-bottom: 1px solid white;
}

.input:first-child {
  border-bottom: none;
  display: none;
}
button {
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 10px 25px;
  border-radius: 10px;
  margin: 20px 15px 20px 0;
  color: white;
  transition: 0.5s;
}
.btn-save {
  background-color: rgb(9, 170, 9);
}
.btn-save:hover {
  background-color: rgb(75, 177, 75);
}
.btn-cancel {
  background-color: orangered;
}
.btn-cancel:hover {
  background-color: rgb(170, 79, 46);
}
</style>