<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Departamento</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarDepartamento">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="Departamento.nombre"
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
            <button type="button" v-on:click="listarD" class="btn btn-danger">
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
      Departamento: [],
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get(
          "https://localhost:7241/Departamentos/" +
            this.$route.params.pkDepartamento
        )
        .then((result) => {
          console.log(result.data.result);
          this.Departamento = result.data.result;
        });
    },

    ListarD() {
      this.$router.push("/listarD");
    },

    actualizarDepartamento() {
      let datosEnviar = {
        nombre: this.Departamento.nombre,
      };

      axios
        .put(
          "https://localhost:7241/Departamentos/" +
            this.$route.params.pkDepartamento,
          datosEnviar
        )
        .then((result) => {
          console.log(result.data.result);
          this.$router.push("/ListarD");
        });
    },
  },
};
</script>
