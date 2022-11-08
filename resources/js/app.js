import './bootstrap';
import '../sass/app.scss'
import {createApp} from "vue/dist/vue.esm-bundler.js";
import Item from "./components/Item.vue";
import { BIconPencilSquare, BIconFilePlusFill, BIconTrash } from 'bootstrap-icons-vue';

const app = createApp({})

app.component('BIconFilePlusFill', BIconFilePlusFill);
app.component('BIconPencilSquare', BIconPencilSquare);
app.component('BIconTrash', BIconTrash);
app.component('item', Item)

app.mount('#app')


