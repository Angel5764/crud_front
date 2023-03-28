<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Rol</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRol">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="Rol.nombre"
              id="nombre"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre</small
            >
          </div>
          <br />
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-warning">Guardar</button> |
            <!-- |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
              >Cancelar</router-link
            >| -->
            <button type="button" v-on:click="ListarR" class="btn btn-danger">
              Cancelar</button
            >|
          </div>
        </form>
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
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Roles/" + this.$route.params.pkRol)
        .then((result) => {
          console.log(result.data.result);
          this.Rol = result.data.result;
        });
    },

    ListarR() {
      this.$router.push("/listarR");
    },

    actualizarRol() {
      let datosEnviar = {
        nombre: this.Rol.nombre,
      };

      axios
        .put(
          "https://localhost:7241/Roles/" + this.$route.params.pkRol,
          datosEnviar
        )
        .then((result) => {
          console.log(result.data.result);
          this.$router.push("/ListarR");
        });
    },
  },
};
</script>
