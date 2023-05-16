import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './style.css';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import AppVue from './App.vue';
import { globalUserRef } from './firebase';

const Home = () => import('./components/Home.vue');
const SearchView = () => import('./components/search/SearchView.vue');
const SongDetailPage = () => import('./components/song-detail/SongDetailPage.vue');
const SongEditPage = () => import('./components/admin/SongEditPage.vue');
const ExplorePage = () => import('./components/explore/ExplorePage.vue');
const ExploreResults = () => import('./components/explore/ExploreResultsPage.vue');
const AdminPage = () => import ('./components/admin/AdminHome.vue');

const SignUpPage = () => import('./components/auth/SignUpPage.vue');
const LogInPage = () => import('./components/auth/LoginPage.vue');

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/search', component: SearchView },
  { path: '/song/:id', component: SongDetailPage, name: 'song' },
  { path: '/song/:id/edit', component: SongEditPage, name: 'songEdit' },
  { path: '/explore', component: ExplorePage, },
  { path: '/explore/:category/:query', component: ExploreResults, },
  { path: '/admin', component: AdminPage, name: 'admin' },

  { path: '/signup', component: SignUpPage },
  { path: '/login', component: LogInPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  const userIsLoggedIn = !!globalUserRef.value;
  if (!userIsLoggedIn && (to.name === 'admin' || to.name == 'songEdit')) {
    return {
      name: 'home',
    }
  }
  return true;
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
