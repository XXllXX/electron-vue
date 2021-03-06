import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";

import electron from "electron";

import "@/style/index.scss";

Vue.config.productionTip = false;

Vue.prototype.$electron = electron;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
