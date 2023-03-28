<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Rol</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRol">
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
          </div>
          <br />
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ name: 'listarR' }" class="btn btn-danger"
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
      Rol: {},
    };
  },

  methods: {
    agregarRol() {
      console.log(this.Rol);

      var datosEnviar = {
        nombre: this.Rol.nombre,
      };

      axios.post("https://localhost:7241/Roles", datosEnviar).then((result) => {
        console.log(result);
        window.location.href = "ListarR";
      });
    },
  },
};
</script>
