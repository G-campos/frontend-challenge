
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'cadastro', component: () => import('pages/Cadastro.vue') },
      { path: 'resumo', component: () => import('pages/Resumo.vue') },
      { path: 'sobre', component: () => import('pages/Sobre.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
