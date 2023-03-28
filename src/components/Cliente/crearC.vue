<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Cliente</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarCliente">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="Cliente.nombre"
              id="nombre"
              placeholder="Nombre"
            />
            <label for="">Apellidos:</label>
            <input
              type="text"
              class="form-control"
              name="apellidos"
              v-model="Cliente.apellido"
              id="apellido"
              placeholder="Apellidos"
            />
          </div>
          <div class="form-group">
            <label for="">Telefono:</label>
            <input
              type="text"
              class="form-control"
              name="telefono"
              id="telefono"
              v-model="Cliente.telefono"
              placeholder="Telefono"
            />
            <label for="">Email:</label>
            <input
              type="text"
              class="form-control"
              name="email"
              id="email"
              v-model="Cliente.email"
              aria-describedby="helpId"
              placeholder="Email"
            />
            <label for="">Direccion:</label>
            <input
              type="text"
              class="form-control"
              name="direccion"
              id="direccion"
              v-model="Cliente.direccion"
              placeholder="Direccion"
            />
          </div>
          <br />
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ name: 'listarC' }" class="btn btn-danger"
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
      Cliente: {},
    };
  },

  methods: {
    agregarCliente() {
      console.log(this.Cliente);

      var datosEnviar = {
        nombre: this.Cliente.nombre,
        apellido: this.Cliente.apellido,
        telefono: this.Cliente.telefono,
        email: this.Cliente.email,
        direccion: this.Cliente.direccion,
      };

      axios
        .post("https://localhost:7241/Clientes", datosEnviar)
        .then((result) => {
          console.log(result);
          window.location.href = "ListarC";
        });
    },
  },
};
</script>
