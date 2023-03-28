<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Factura</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarFactura">
          <div class="form-group">
            <label for="">Razon Social:</label>
            <input
              type="text"
              class="form-control"
              name="RazonSocial"
              v-model="Factura.RazonSocial"
              id="RazonSocial"
              placeholder="RazonSocial"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa una RazonSocial</small
            >
          </div>
          <div class="form-group">
            <label for="">Fecha:</label>
            <input
              type="text"
              class="form-control"
              name="Fecha"
              id="Fecha"
              v-model="Factura.Fecha"
              aria-describedby="helpId"
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
              aria-describedby="helpId"
              placeholder="RFC"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa un RFC</small
            >
          </div>
          <div class="form-group">
            <label for="">Cliente:</label>
            <input
              type="text"
              class="form-control"
              name="Cliente"
              v-model="Factura.Cliente"
              aria-describedby="helpId"
              id="Cliente"
              placeholder="Cliente"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa un Cliente</small
            >
          </div>
          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-warning">Guardar</button>|
            <!-- |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
              >Cancelar</router-link
            >| -->
            <button type="button" v-on:click="ListarF" class="btn btn-danger">
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
      Factura: [],
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Facturas/" + this.$route.params.pkFactura)
        .then((result) => {
          console.log(result.data.result);
          this.Factura = result.data.result;
        });
    },

    ListarF() {
      this.$router.push("/ListarF");
    },

    actualizarFactura() {
      let datosEnviar = {
        RazonSocial: this.Factura.RazonSocial,
        Fecha: this.Factura.Fecha,
        RFC: this.Factura.RFC,
        Cliente: this.Factura.Cliente,
      };

      axios
        .put(
          "https://localhost:7241/Facturas/" + this.$route.params.pkFactura,
          datosEnviar
        )
        .then((result) => {
          console.log(result.data.result);
          this.$router.push("/ListarF");
        });
    },
  },
};
</script>
