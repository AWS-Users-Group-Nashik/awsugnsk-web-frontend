import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import router from "./router";
import ApiService from "./common/api.service";

import "vuesax/dist/vuesax.css";

ApiService.init();
Vue.use(Vuesax);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
