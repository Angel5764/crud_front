<template>
  <router-link to="/ListarC">Listar</router-link> |
  <router-link to="/ClienteEditar">Editar</router-link> |
  <router-link to="/ClienteCrear">Crear</router-link>
  <div>
    <div class="card">
      <div class="card-header">Cliente</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Password</th>
              <th>fechaRegistro</th>
              <th>fkEmpleado</th>
              <th>fkRol</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Usuarios in Usuarios" :key="Usuarios.id">
              <td>{{ Usuarios.id }}</td>
              <td>{{ Usuarios.user }}</td>
              <td>{{ Usuarios.password }}</td>
              <td>{{ Usuarios.fkEmpleado }}</td>
              <td>{{ Usuarios.fkRol }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  |<button
                    type="button"
                    v-on:click="borrarUsuario(Usuarios.id)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|
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
      Usuarios: [],
    };
  },
  created: function () {
    this.consultarUsuarios();
  },
  methods: {
    consultarUsuarios() {
      axios.get("https://localhost:7241/Usuarios").then((result) => {
        console.log(result.data);
        this.Usuarios = result.data;
      });
    },

    borrarUsuario(id) {
      console.log(id);

      axios.delete("https://localhost:7241/Usuarios/EliminarUsers/" + id);

      window.location.href = "UsuarioListar";
    },
  },
};
</script>
