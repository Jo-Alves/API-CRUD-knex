import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home.vue'
import persons from "../components/templates/ListPersons.vue"
import person from "../components/templates/NewPersons.vue"
Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/persons", component: persons },
    { path: "/person", component: person },
    { path: "/person/:id", component: person },
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;