<template>
  <div>
    <div class="card">
      <div class="card-header">Empleado</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Direccion</th>
              <th>Ciudad</th>
              <th>Departamento</th>
              <th>Puesto</th>
              <th>
                <router-link to="/CrearE">
                  <button type="button" class="btn btn-success">Crear</button>
                </router-link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Empleado in Empleado" :key="Empleado.pkEmpleado">
              <td>{{ Empleado.pkEmpleado }}</td>
              <td>{{ Empleado.nombre }}</td>
              <td>{{ Empleado.apellido }}</td>
              <td>{{ Empleado.direccion }}</td>
              <td>{{ Empleado.ciudad }}</td>
              <td>{{ Empleado.fkDepartamento }}</td>
              <td>{{ Empleado.fkPuesto }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <button
                    type="button"
                    v-on:click="editar(Empleado.pkEmpleado)"
                    class="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    v-on:click="borrarEmpleado(Empleado.pkEmpleado)"
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
      Empleado: [],
    };
  },
  created: function () {
    this.consultarEmpleado();
  },
  methods: {
    consultarEmpleado() {
      axios.get("https://localhost:7241/Empleados").then((result) => {
        console.log(result.data.result);
        this.Empleado = result.data.result;
        console.log(this.Empleado);
      });
    },

    borrarEmpleado(pkEmpleado) {
      console.log(pkEmpleado);
      axios.delete("https://localhost:7241/Empleados/" + pkEmpleado);

      window.location.href = "ListarE";
    },
    editar(pkEmpleado) {
      console.log(pkEmpleado);
      this.$router.push("/EditarE/" + pkEmpleado);
    },
  },
};
</script>
