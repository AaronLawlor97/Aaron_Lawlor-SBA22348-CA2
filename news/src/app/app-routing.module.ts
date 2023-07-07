import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'tech',
    loadChildren: () => import('./pages/tech/tech.module').then( m => m.TechPageModule)
  },
  {
    path: 'tech-details',
    loadChildren: () => import('./pages/tech-details/tech-details.module').then( m => m.TechDetailsPageModule)
  },

];

@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule { }
 