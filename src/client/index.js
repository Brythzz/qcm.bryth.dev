import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';


//////////////////////////////////////////////////
//  PAGES
//////////////////////////////////////////////////


import App from './pages/App';
import Home from './pages/Home';
import Questions from './pages/Questions';


//////////////////////////////////////////////////
//  ROUTES
//////////////////////////////////////////////////


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/quiz', component: Questions },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});


//////////////////////////////////////////////////
//  MAIN
//////////////////////////////////////////////////


const app = createApp(App).use(router);

router.isReady().then(() => {
    app.mount('body');
});
