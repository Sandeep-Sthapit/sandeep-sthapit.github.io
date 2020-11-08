import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from "vue";

const Home = defineAsyncComponent(() =>
    import ("../views/Home.vue")
);
const Education = defineAsyncComponent(() =>
    import ("../views/Education.vue")
);
const Experience = defineAsyncComponent(() =>
    import ("../views/Experience.vue")
);
const Publication = defineAsyncComponent(() =>
    import ("../views/Publication.vue")
);
const Skills = defineAsyncComponent(() =>
    import ("../views/Skills.vue")
);
const Projects = defineAsyncComponent(() =>
    import ("../views/Projects.vue")
);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/education',
        name: 'Education',
        component: Education
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    },
    {
        path: '/publication',
        name: 'Publication',
        component: Publication
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
})

export default router