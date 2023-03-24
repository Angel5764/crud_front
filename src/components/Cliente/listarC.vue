<template>
  <router-link to="/CrearC">Crear</router-link>
  <div>
    <div class="card">
      <div class="card-header">Cliente</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Direccion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Cliente in Cliente" :key="Cliente.pkCliente">
              <td>{{ Cliente.pkCliente }}</td>
              <td>{{ Cliente.nombre }}</td>
              <td>{{ Cliente.apellido }}</td>
              <td>{{ Cliente.telefono }}</td>
              <td>{{ Cliente.email }}</td>
              <td>{{ Cliente.direccion }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <button
                    type="button"
                    v-on:click="editar(Cliente.pkCliente)"
                    class="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    v-on:click="borrarCliente(Cliente.pkCliente)"
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
      Cliente: [],
    };
  },
  created: function () {
    this.consultarClientes();
  },
  methods: {
    consultarClientes() {
      axios.get("https://localhost:7241/Cliente").then((result) => {
        console.log(result.data.result);
        this.Cliente = result.data.result;
        console.log(this.Cliente);
      });
    },

    borrarCliente(pkCliente) {
      console.log(pkCliente);
      axios.delete("https://localhost:7241/Cliente?id=" + pkCliente);

      window.location.href = "ListarC";
    },
    editar(pkCliente) {
      console.log(pkCliente);
      this.$router.push("/EditarC/" + pkCliente);
    },
  },
};
</script>
