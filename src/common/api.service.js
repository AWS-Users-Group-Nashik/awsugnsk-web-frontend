import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  get(resource) {
    return Vue.axios.get(resource).catch((e) => {
      throw new Error(e);
    });
  },
};

export default ApiService;
