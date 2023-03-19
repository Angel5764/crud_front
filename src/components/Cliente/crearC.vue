<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Cliente</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="Cliente.nombre"
              aria-describedby="helpId"
              id="nombre"
              placeholder="Nombre"
            />
            <label for="">Apellidos:</label>
            <input
              type="text"
              class="form-control"
              name="apellidos"
              v-model="Cliente.apellido"
              aria-describedby="helpId"
              id="apellido"
              placeholder="Apellidos"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa un numero de telefono</small
            >
          </div>
          <div class="form-group">
            <label for="">Telefono:</label>
            <input
              type="text"
              class="form-control"
              name="telefono"
              id="telefono"
              v-model="articulo.proveedor"
              aria-describedby="helpId"
              placeholder="Telefono"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa un email:</small
            >
          </div>
          <div class="form-group">
            <label for="">Email:</label>
            <input
              type="text"
              class="form-control"
              name="email"
              id="email"
              v-model="articulo.email"
              aria-describedby="helpId"
              placeholder="Email"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el precio del articulo</small
            >
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
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
      articulo: {},
    };
  },

  methods: {
    agregarRegistro() {
      console.log(this.articulo);

      var datosEnviar = {
        name: this.articulo.name,
        proveedor: this.articulo.proveedor,
        precio: this.articulo.precio,
      };

      axios
        .post("https://localhost:7053/articulos", datosEnviar)
        .then((result) => {
          console.log(result);
          window.location.href = "Listar";
        });
    },
  },
};
</script>
