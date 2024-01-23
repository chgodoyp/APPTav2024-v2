import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToWelcome = () => redirectLoggedInTo(['welcome']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToWelcome)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    ...canActivate(redirectLoggedInToWelcome)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    ...canActivate(redirectLoggedInToWelcome)
  },
  {
    path: 'welcome',
    title: 'Bienvenida',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },

  {
    path: 'return-trip',
    loadChildren: () => import('./pages/return-trip/return-trip.module').then( m => m.ReturnTripPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./pages/weather/weather.module').then( m => m.WeatherPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'under-construction',
    loadChildren: () => import('./pages/under-construction/under-construction.module').then(m => m.UnderConstructionPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
