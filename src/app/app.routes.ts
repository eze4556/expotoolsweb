import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

   {
    path: 'login',
    loadComponent: () => import('../app/views/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'certificacion',
    loadComponent: () => import('./views/cert-ingresos/cert-ingresos.component').then((m) => m.CertIngresosComponent),
  },
    {
    path: 'perfil',
    loadComponent: () => import('../app/views/perfil/perfil.component').then((m) => m.PerfilComponent),
  },
  {
    path: 'afip',
    loadComponent: () => import('../app/views/afip/afip.component').then((m) => m.AfipComponent),
  },
 {
    path: 'declaracion',
    loadComponent: () => import('../app/views/declaracion/declaracion.component').then((m) => m.DeclaracionComponent),
  },

   {
    path: 'F931',
    loadComponent: () => import('../app/views/f931/f931.component').then((m) => m.F931Component),
  },


  {
    path: 'facturacion',
    loadComponent: () => import('./views/facturacion/facturacion.component').then((m) => m.FacturacionComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./views/plan-pago/product-detail.component').then((m) => m.ProductDetailComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./views/recibo-sueldo/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
