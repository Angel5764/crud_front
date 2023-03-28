<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Empleado</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarEmpleado">
          <div class="form-group">
            <label for="">Nombre(s):</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="Empleado.nombre"
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
              v-model="Empleado.apellido"
              aria-describedby="helpId"
              placeholder="Apellidos"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa tus apellidos</small
            >
          </div>
          <div class="form-group">
            <label for="">Direcion:</label>
            <input
              type="text"
              class="form-control"
              name="direccion"
              id="direccion"
              v-model="Empleado.direccion"
              aria-describedby="helpId"
              placeholder="direccion"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa tu direccion</small
            >
          </div>
          <div class="form-group">
            <label for="">Email:</label>
            <input
              type="text"
              class="form-control"
              name="email"
              v-model="Empleado.email"
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
              v-model="Empleado.direccion"
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
      Empleado: [],
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get(
          "https://localhost:7241/Empleados/" + this.$route.params.pkEmpleado
        )
        .then((result) => {
          console.log(result.data.result);
          this.Empleado = result.data.result;
        });
    },

    ListarC() {
      this.$router.push("/ListarC");
    },

    actualizarEmpleado() {
      let datosEnviar = {
        nombre: this.Empleado.nombre,
        apellido: this.Empleado.apellido,
        direccion: this.Empleado.direccion,
        ciudad: this.Empleado.ciudad,
        fkDepartamento: this.Empleado.fkDepartamento,
        fkPuesto: this.Empleado.fkPuesto,
      };

      axios
        .put(
          "https://localhost:7241/Empleados/" + this.$route.params.pkEmpleado,
          datosEnviar
        )
        .then((result) => {
          console.log(result.data.result);
          this.$router.push("/ListarE");
        });
    },
  },
};
</script>
