import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import router from "./router";

import "vuesax/dist/vuesax.css";

Vue.use(Vuesax);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
