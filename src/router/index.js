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
    path: "/UsuarioCrear",
    name: "crear",
    component: crearU,
  },
  {
    path: "/UsuarioListar",
    name: "listar",
    component: listarU,
  },
  {
    path: "/UsuarioEditar",
    name: "editar",
    component: editarU,
  },
  {
    path: "/ClienteCrear",
    name: "crear",
    component: crearC,
  },
  {
    path: "/ClienteEditar",
    name: "editar",
    component: editarC,
  },
  {
    path: "/ClienteListar",
    name: "listar",
    component: listarC,
  },
  {
    path: "/DepartamentoCrear",
    name: "crear",
    component: crearD,
  },
  {
    path: "/DepartamentoEditar",
    name: "editar",
    component: editarD,
  },
  {
    path: "/DepartamentoListar",
    name: "listar",
    component: listarD,
  },
  {
    path: "/EmpleadoCrear",
    name: "crear",
    component: crearE,
  },
  {
    path: "/EmpleadoEditar",
    name: "editar",
    component: editarE,
  },
  {
    path: "/EmpleadoListar",
    name: "listar",
    component: listarE,
  },
  {
    path: "/FacturaCrear",
    name: "crear",
    component: crearF,
  },
  {
    path: "/FacturaEditar",
    name: "editar",
    component: editarF,
  },
  {
    path: "/FacturaListar",
    name: "listar",
    component: listarF,
  },
  {
    path: "/PuestoCrear",
    name: "crear",
    component: crearP,
  },
  {
    path: "/PuestoEditar",
    name: "editar",
    component: editarP,
  },
  {
    path: "/PuestoListar",
    name: "listar",
    component: listarP,
  },
  {
    path: "/RolCrear",
    name: "crear",
    component: crearR,
  },
  {
    path: "/RolEditar",
    name: "editar",
    component: editarR,
  },
  {
    path: "/RolListar",
    name: "listar",
    component: listarR,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
