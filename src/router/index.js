import { createRouter, createWebHistory } from "vue-router";
import crearU from "../components/Usuario/crearU.vue";
import editarU from "../components/Usuario/editarU.vue";
import listarU from "../components/Usuario/listarU.vue";
import crearC from "../components/Cliente/crearC.vue";
import editarC from "../components/Cliente/editarC.vue";
import listarC from "../components/Cliente/listarC.vue";
import crearD from "../components/Departamento/crearD.vue";
import editarD from "../components/Departamento/editarD.vue";
import listarD from "../components/Departamento/listarD.vue";
import crearE from "../components/Empleado/crearE.vue";
import editarE from "../components/Empleado/editarE.vue";
import listarE from "../components/Empleado/listarE.vue";
import crearF from "../components/Factura/crearF.vue";
import editarF from "../components/Factura/editarF.vue";
import listarF from "../components/Factura/listarF.vue";
import crearP from "../components/Puesto/crearP.vue";
import editarP from "../components/Puesto/editarP.vue";
import listarP from "../components/Puesto/listarP.vue";
import crearR from "../components/Rol/crearR.vue";
import editarR from "../components/Rol/editarR.vue";
import listarR from "../components/Rol/listarR.vue";
import Login from "../components/LoginZea.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/CrearU",
    name: "crear",
    component: crearU,
  },
  {
    path: "/listarU",
    name: "listarU",
    component: listarU,
  },
  {
    path: "/editarU/:pkUsuario",
    name: "editarU",
    component: editarU,
  },
  {
    path: "/CrearC",
    name: "crearC",
    component: crearC,
  },
  {
    path: "/editarC/:pkCliente",
    name: "editarC",
    component: editarC,
  },
  {
    path: "/ListarC",
    name: "listarC",
    component: listarC,
  },
  {
    path: "/crearD",
    name: "crearD",
    component: crearD,
  },
  {
    path: "/editarD/:pkDepartamento",
    name: "editarD",
    component: editarD,
  },
  {
    path: "/listarD",
    name: "listarD",
    component: listarD,
  },
  {
    path: "/crearE",
    name: "crearE",
    component: crearE,
  },
  {
    path: "/editarE/:pkEmpleado",
    name: "editarE",
    component: editarE,
  },
  {
    path: "/listarE",
    name: "listarE",
    component: listarE,
  },
  {
    path: "/crearF",
    name: "crearF",
    component: crearF,
  },
  {
    path: "/editarF/:pkFactura",
    name: "editarF",
    component: editarF,
  },
  {
    path: "/listarF",
    name: "listarF",
    component: listarF,
  },
  {
    path: "/crearP",
    name: "crearP",
    component: crearP,
  },
  {
    path: "/editarP/:pkPuesto",
    name: "editarP",
    component: editarP,
  },
  {
    path: "/listarP",
    name: "listarP",
    component: listarP,
  },
  {
    path: "/crearR",
    name: "crearR",
    component: crearR,
  },
  {
    path: "/editarR/:pkRol",
    name: "editarR",
    component: editarR,
  },
  {
    path: "/listarR",
    name: "listarR",
    component: listarR,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
