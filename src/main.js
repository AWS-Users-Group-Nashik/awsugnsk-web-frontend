import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import router from './router'

import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {
	colors: {
		primary: '#FFECD1',
		success: '#60d394',
		danger: '#ee6055',
		warning: '#ffd97d',
		dark: '#101419',
	},
})

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
