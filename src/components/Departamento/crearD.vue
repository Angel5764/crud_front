<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Departamento</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarDepartamento">
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
          </div>
          <br />
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ name: 'listarD' }" class="btn btn-danger"
              >Cancelar</router-link
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
      Departamento: {},
    };
  },

  methods: {
    agregarDepartamento() {
      console.log(this.Departamento);

      var datosEnviar = {
        nombre: this.Departamento.nombre,
      };

      axios
        .post("https://localhost:7241/Departamentos", datosEnviar)
        .then((result) => {
          console.log(result);
          window.location.href = "ListarD";
        });
    },
  },
};
</script>
