
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/agenda', component: () => import('pages/Agenda.vue') },
      { path: '/cadastro', component: () => import('pages/Cadastro.vue') },
      { path: '/registro', component: () => import('src/pages/registro/Registro.vue') }
    ]
  }
]

export default routes
