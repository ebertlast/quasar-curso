
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue'), name: 'home',
        meta: {
          requiereToken: true
        }
      },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/VoidLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue'), name: 'login' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
