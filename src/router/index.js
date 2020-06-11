import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Editor from '../views/Editor.vue'
import Preview from '../views/Preview.vue'
import Work from '../views/Work.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/editor/:id',
        name: 'Editor',
        component: Editor
    },
    {
        path: '/preview/:id',
        name: 'Preview',
        component: Preview
    },
    {
        path: '/work/:id',
        name: 'Work',
        component: Work
    }
]

const router = new VueRouter({
    routes
})

export default router;