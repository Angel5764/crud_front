<template>
  <div>
    <div class="card">
      <div class="card-header">Departamento</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>
                <router-link to="/CrearD">
                  <button type="button" class="btn btn-success">Crear</button>
                </router-link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="Departamento in Departamento"
              :key="Departamento.pkDepartamento"
            >
              <td>{{ Departamento.pkDepartamento }}</td>
              <td>{{ Departamento.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <button
                    type="button"
                    v-on:click="editarD(Departamento.pkDepartamento)"
                    class="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    v-on:click="borrarDepartamento(Departamento.pkDepartamento)"
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
      Departamento: [],
    };
  },
  created: function () {
    this.consultarDepartamento();
  },
  methods: {
    consultarDepartamento() {
      axios.get("https://localhost:7241/Departamentos").then((result) => {
        console.log(result.data.result);
        this.Departamento = result.data.result;
        console.log(this.Departamento);
      });
    },

    borrarDepartamento(pkDepartamento) {
      console.log(pkDepartamento);
      axios.delete("https://localhost:7241/Departamentos/" + pkDepartamento);

      window.location.href = "listarD";
    },
    editarD(pkDepartamento) {
      console.log(pkDepartamento);
      this.$router.push("/editarD/" + pkDepartamento);
    },
  },
};
</script>
