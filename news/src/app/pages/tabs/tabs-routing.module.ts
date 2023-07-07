import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { NewsDetailsPageModule } from '../news-details/news-details.module';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'news',
          children: [
            {
              path: '',
              loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../news-details/news-details.module').then( m => m.NewsDetailsPageModule)
            }
          ]
        },

        {
          path: 'sports',
          children: [
            {
              path: '',
              loadChildren: () => import('../sports/sports.module').then( m => m.SportsPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../sports-details/sports-details.module').then( m => m.SportsDetailsPageModule)
            }
          ]
        },
        {
          path: 'tech',
          children: [
            {
              path: '',
              loadChildren: () => import('../tech/tech.module').then( m => m.TechPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../tech-details/tech-details.module').then( m => m.TechDetailsPageModule)
            }
          ]
        }
        ,
        
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/news',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

 