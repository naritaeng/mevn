import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/strhtml',
    name: 'strhtml',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ '../views/StrHtml.vue'
      )
  },
  {
    path: '/input',
    name: 'input',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ '../views/Input.vue'
      )
  },
  {
    path: '/select',
    name: 'select',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ '../views/Select.vue'
      )
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ '../views/Checkbox.vue'
      )
  },
  {
    path: '/attribute',
    name: 'attribute',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ '../views/Attribute.vue'
      )
  },
  {
    path: '/bindList',
    name: 'bindList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ '../views/BindList.vue'
      )
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about",webpackPrefetch:true */ '../views/AboutView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
