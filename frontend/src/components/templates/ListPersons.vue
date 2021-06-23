<template>
  <div class="persons">
    <div class="content">
      <router-link to="/person" class="btn-new">Novo</router-link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>CPF</th>
            <th>ENDEREÇO</th>
            <th>Opção</th>
          </tr>
        </thead>
        <tbody v-for="person in persons" :key="person.id">
          <tr>
            <td>{{ person.id }}</td>
            <td>{{ person.name }}</td>
            <td>{{ person.cpf }}</td>
            <td>{{ person.address }}</td>
            <td>
              <button class="btn-edit">
                <i
                  class="fa fa-pencil"
                  aria-hidden="true"
                  @click="edit(person.id)"
                ></i>
              </button>
              <button class="btn-delete" @click="delet(person.id)">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let host = "http://localhost:3000";
export default {
  data() {
    return {
      persons: [],
    };
  },
  methods: {
    async list() {
      try {
        const response = await axios.get(`${host}/persons`);
        this.persons = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    edit(id) {
      this.$router.push(`/person/${id}`);
    },
    delet(id) {
      if (window.confirm("Deseja mesmo excluir?")) {
        axios
          .delete(`${host}/person/${id}`)
          .then(() => {
            this.list();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  mounted() {
    this.list();
  },
};
</script>

<style scoped>
.persons {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 250px;
}

.content {
  margin-top: 10%;
  transform: translateY(-50%);
}
table {
  margin: 25px auto;
  border-collapse: collapse;
  color: white;
}

td,
th {
  border: 1px solid white;
  text-align: center;
  padding: 5px;
}

button {
  padding: 10px 15px;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 20px;
  transition: 0.5s;
}
.btn-edit {
  margin-right: 5px;
  background-color: rgb(204, 204, 64);
  padding: 5px 15px;
  border-radius: 5px;
}

.btn-edit:hover {
  background-color: rgb(80, 80, 28);
}

.btn-edit i {
  color: black;
  transition: 0.5s;
}

.btn-edit i:hover {
  color: white;
}

.btn-delete {
  background-color: rgb(184, 57, 57);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}

.btn-delete:hover {
  background-color: rgb(90, 38, 38);
}

.btn-new {
  background-color: rgb(58, 58, 148);
  color: white;
  padding: 15px 50px;
}

.btn-new:hover {
  background-color: rgb(76, 76, 170);
}
</style>