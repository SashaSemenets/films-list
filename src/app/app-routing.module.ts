import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full'
  },
  {
    path: 'top',
    loadChildren: () => import('./pages/top/top.module').then( m => m.TopPageModule)
  },
  {
    path: 'decade',
    loadChildren: () => import('./pages/decade/decade.module').then( m => m.DecadePageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
