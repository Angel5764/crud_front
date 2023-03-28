<template>
  <div>
    <div class="card">
      <div class="card-header">Factura</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>RazonSocial</th>
              <th>Fecha</th>
              <th>RFC</th>
              <th>Cliente</th>
              <th>
                <router-link to="/CrearF">
                  <button type="button" class="btn btn-success">Crear</button>
                </router-link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Factura in Factura" :key="Factura.pkFactura">
              <td>{{ Factura.pkFactura }}</td>
              <td>{{ Factura.RazonSocial }}</td>
              <td>{{ Factura.Fecha }}</td>
              <td>{{ Factura.rfc }}</td>
              <td>{{ Factura.Cliente }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <button
                    type="button"
                    v-on:click="editar(Factura.pkFactura)"
                    class="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    v-on:click="borrarFactura(Factura.pkFactura)"
                    class="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
    this.consultarFacturas();
  },
  methods: {
    consultarFacturas() {
      axios.get("https://localhost:7241/Facturas").then((result) => {
        console.log(result.data.result);
        this.Factura = result.data.result;
        console.log(this.Factura);
      });
    },

    borrarFactura(pkFactura) {
      console.log(pkFactura);
      axios.delete("https://localhost:7241/Facturas/" + pkFactura);

      window.location.href = "ListarF";
    },
    editar(pkFactura) {
      console.log(pkFactura);
      this.$router.push("/EditarF/" + pkFactura);
    },
  },
};
</script>
