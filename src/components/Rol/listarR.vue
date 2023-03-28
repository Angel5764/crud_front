<template>
  <div>
    <div class="card">
      <div class="card-header">Rol</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>
                <router-link to="/CrearR">
                  <button type="button" class="btn btn-success">Crear</button>
                </router-link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Rol in Rol" :key="Rol.pkRol">
              <td>{{ Rol.pkRol }}</td>
              <td>{{ Rol.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <button
                    type="button"
                    v-on:click="editarR(Rol.pkRol)"
                    class="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    v-on:click="borrarRol(Rol.pkRol)"
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
      Rol: [],
    };
  },
  created: function () {
    this.consultarRol();
  },
  methods: {
    consultarRol() {
      axios.get("https://localhost:7241/Roles").then((result) => {
        console.log(result.data.result);
        this.Rol = result.data.result;
        console.log(this.Rol);
      });
    },

    borrarRol(pkRol) {
      console.log(pkRol);
      axios.delete("https://localhost:7241/Roles/" + pkRol);

      window.location.href = "listarR";
    },
    editarR(pkRol) {
      console.log(pkRol);
      this.$router.push("/editarR/" + pkRol);
    },
  },
};
</script>
