<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Factura</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarFactura">
          <div class="form-group">
            <label for="">RazonSocial:</label>
            <input
              type="text"
              class="form-control"
              name="RazonSocial"
              v-model="Factura.RazonSocial"
              id="RazonSocial"
              placeholder="Ingrese una RazonSocial"
            />
            <label for="">Fecha:</label>
            <input
              type="text"
              class="form-control"
              name="fecha"
              v-model="Factura.Fecha"
              id="fecha"
              placeholder="Fecha"
            />
          </div>
          <div class="form-group">
            <label for="">RFC:</label>
            <input
              type="text"
              class="form-control"
              name="RFC"
              id="RFC"
              v-model="Factura.RFC"
              placeholder="RFC"
            />
            <label for="">Cliente:</label>
            <input
              type="text"
              class="form-control"
              name="Cliente"
              id="Cliente"
              v-model="Factura.Cliente"
              aria-describedby="helpId"
              placeholder="Cliente"
            />
          </div>
          <br />
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ name: 'listarF' }" class="btn btn-danger"
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
      Factura: {},
    };
  },

  methods: {
    agregarFactura() {
      console.log(this.Factura);

      var datosEnviar = {
        nombre: this.Factura.RazonSocial,
        apellido: this.Factura.Fecha,
        telefono: this.Factura.RFC,
        email: this.Factura.Cliente,
      };

      axios
        .post("https://localhost:7241/Facturas", datosEnviar)
        .then((result) => {
          console.log(result);
          window.location.href = "ListarF";
        });
    },
  },
};
</script>
