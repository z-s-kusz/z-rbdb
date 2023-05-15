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
const SongEditPage = () => import('./components/admin/SongEditPage.vue');
const ExplorePage = () => import('./components/explore/ExplorePage.vue');
const ExploreResults = () => import('./components/explore/ExploreResultsPage.vue');
const AdminPage = () => import ('./components/admin/AdminHome.vue');


const routes = [
  { path: '/', component: Home },
  { path: '/search', component: SearchView },
  { path: '/song/:id', component: SongDetailPage, name: 'song' },
  { path: '/song/:id/edit', component: SongEditPage },
  { path: '/explore', component: ExplorePage, },
  { path: '/explore/:category/:query', component: ExploreResults, },
  { path: '/admin', component: AdminPage },
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
