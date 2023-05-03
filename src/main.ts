import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './style.css';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import AppVue from './App.vue';

const Home = () => import('./components/Home.vue');
const SearchView = () => import('./components/search/SearchView.vue');
const SongDetailPage = () => import('./components/song-detail/SongDetailPage.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: SearchView },
  { path: '/song/:id', component: SongDetailPage, name: 'song' },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify({
  icons: {
    aliases,
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark'
  }
});

const app = createApp(AppVue);
app.use(router);
app.use(vuetify);
app.mount('#app');
