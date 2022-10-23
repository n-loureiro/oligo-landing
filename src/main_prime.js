import {createApp} from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import  Menubar  from 'primevue/menubar';


import 'primevue/resources/themes/tailwind-light/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css/'

const app = createApp(App);
app.use(PrimeVue)
app.use(ToastService)


app.component('InputText',InputText)
app.component('Button',Button)
app.component('Toast',Toast )
app.component('Menubar',Menubar)

app.mount('#app')
