<template>
  <div>
    <div class="card">
      <div class="card-header">Puesto</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>
                <router-link to="/CrearP">
                  <button type="button" class="btn btn-success">Crear</button>
                </router-link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Puesto in Puesto" :key="Puesto.pkPuesto">
              <td>{{ Puesto.pkPuesto }}</td>
              <td>{{ Puesto.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <button
                    type="button"
                    v-on:click="editarP(Puesto.pkPuesto)"
                    class="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    v-on:click="borrarPuesto(Puesto.pkPuesto)"
                    class="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Puesto: [],
    };
  },
  created: function () {
    this.consultarPuesto();
  },
  methods: {
    consultarPuesto() {
      axios.get("https://localhost:7241/Puestos").then((result) => {
        console.log(result.data.result);
        this.Puesto = result.data.result;
        console.log(this.Puesto);
      });
    },

    borrarPuesto(pkPuesto) {
      console.log(pkPuesto);
      axios.delete("https://localhost:7241/Puestos/" + pkPuesto);

      window.location.href = "listarP";
    },
    editarP(pkPuesto) {
      console.log(pkPuesto);
      this.$router.push("/editarR/" + pkPuesto);
    },
  },
};
</script>
