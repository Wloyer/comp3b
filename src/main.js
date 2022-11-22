import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap";


createApp(App).use(store).use(router).mount('#app')

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});