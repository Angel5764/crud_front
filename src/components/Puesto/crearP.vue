<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Puesto</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarPuesto">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="Puesto.nombre"
              id="nombre"
              placeholder="Nombre"
            />
          </div>
          <br />
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ name: 'listarP' }" class="btn btn-danger"
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
      Puesto: {},
    };
  },

  methods: {
    agregarPuesto() {
      console.log(this.Puesto);

      var datosEnviar = {
        nombre: this.Puesto.nombre,
      };

      axios
        .post("https://localhost:7241/Puestos", datosEnviar)
        .then((result) => {
          console.log(result);
          window.location.href = "ListarP";
        });
    },
  },
};
</script>
