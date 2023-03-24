<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Cliente</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarCliente">
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
            <small id="helpId" class="form-text" text-muted
              >Ingresa tus nombres</small
            >
          </div>
          <div class="form-group">
            <label for="">Apellidos:</label>
            <input
              type="text"
              class="form-control"
              name="Apellidos"
              id="apellidos"
              v-model="Cliente.apellido"
              aria-describedby="helpId"
              placeholder="Apellidos"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa tus apellidos</small
            >
          </div>
          <div class="form-group">
            <label for="">Telefono:</label>
            <input
              type="text"
              class="form-control"
              name="Telefono"
              id="telefono"
              v-model="Cliente.telefono"
              aria-describedby="helpId"
              placeholder="Telefono"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa tu telefono</small
            >
          </div>
          <div class="form-group">
            <label for="">Email:</label>
            <input
              type="text"
              class="form-control"
              name="email"
              v-model="Cliente.email"
              aria-describedby="helpId"
              id="email"
              placeholder="Email"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa tu Email</small
            >
          </div>
          <div class="form-group">
            <label for="">Direccion:</label>
            <input
              type="text"
              class="form-control"
              name="direccion"
              v-model="Cliente.direccion"
              aria-describedby="helpId"
              id="direccion"
              placeholder="Direccion"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa tu Email</small
            >
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-warning">Guardar</button>|
            <!-- |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
              >Cancelar</router-link
            >| -->
            <button type="button" v-on:click="ListarC" class="btn btn-danger">
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
      Cliente: [],
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Cliente/" + this.$route.params.pkCliente)
        .then((result) => {
          console.log(result.data.result);
          this.Cliente = result.data.result;
        });
    },

    ListarC() {
      this.$router.push("/ListarC");
    },

    actualizarCliente() {
      let datosEnviar = {
        nombre: this.Cliente.nombre,
        apellido: this.Cliente.apellido,
        telefono: this.Cliente.telefono,
        email: this.Cliente.email,
        direccion: this.Cliente.direccion,
      };

      axios
        .put(
          "https://localhost:7241/Cliente?id=" + this.$route.params.pkCliente,
          datosEnviar
        )
        .then((result) => {
          console.log(result.data.result);
          this.$router.push("/ListarC");
        });
    },
  },
};
</script>
