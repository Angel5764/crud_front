<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Empleado</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarEmpleado">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="Empleado.nombre"
              id="nombre"
              placeholder="Nombre"
            />
            <label for="">Apellidos:</label>
            <input
              type="text"
              class="form-control"
              name="apellidos"
              v-model="Empleado.apellido"
              id="apellido"
              placeholder="Apellidos"
            />
          </div>
          <div class="form-group">
            <label for="">Direccion:</label>
            <input
              type="text"
              class="form-control"
              name="direccion"
              id="direccion"
              v-model="Empleado.direccion"
              placeholder="Direccion"
            />
            <label for="">Ciudad:</label>
            <input
              type="text"
              class="form-control"
              name="ciudad"
              id="ciudad"
              v-model="Empleado.ciudad"
              aria-describedby="helpId"
              placeholder="Ciudad"
            />
            <label for="">FkDepartamento:</label>
            <input
              type="text"
              class="form-control"
              name="FkDepartamento"
              id="fkDepartamento"
              v-model="Empleado.fkDepartamento"
              placeholder="FkDepartamento"
            />
            <label for="">FkPuesto:</label>
            <input
              type="text"
              class="form-control"
              name="FkPuesto"
              id="fkPuesto"
              v-model="Empleado.fkPuesto"
              placeholder="FkPuesto"
            />
          </div>
          <br />
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ name: 'listarE' }" class="btn btn-danger"
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
      Empleado: {},
    };
  },

  methods: {
    agregarEmpleado() {
      console.log(this.Empleado);

      var datosEnviar = {
        nombre: this.Empleado.nombre,
        apellido: this.Empleado.apellido,
        direccion: this.Empleado.direccion,
        ciudad: this.Empleado.ciudad,
        fkDepartamento: this.Empleado.fkDepartamento,
        fkPuesto: this.Empleado.fkPuesto,
      };

      axios
        .post("https://localhost:7241/Empleados", datosEnviar)
        .then((result) => {
          console.log(result);
          window.location.href = "ListarE";
        });
    },
  },
};
</script>
