import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bf1',
    loadChildren: () => import('./FD/bf1/bf1.module').then( m => m.BF1PageModule)
  },
  {
    path: 'bf2',
    loadChildren: () => import('./FD/bf2/bf2.module').then( m => m.BF2PageModule)
  },
  {
    path: 'bf3',
    loadChildren: () => import('./FD/bf3/bf3.module').then( m => m.BF3PageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'l1',
    loadChildren: () => import('./FD/l1/l1.module').then( m => m.L1PageModule)
  },
  {
    path: 'l2',
    loadChildren: () => import('./FD/l2/l2.module').then( m => m.L2PageModule)
  },
  {
    path: 'l3',
    loadChildren: () => import('./FD/l3/l3.module').then( m => m.L3PageModule)
  },
  {
    path: 'd1',
    loadChildren: () => import('./FD/d1/d1.module').then( m => m.D1PageModule)
  },
  {
    path: 'd2',
    loadChildren: () => import('./FD/d2/d2.module').then( m => m.D2PageModule)
  },
  {
    path: 'd3',
    loadChildren: () => import('./FD/d3/d3.module').then( m => m.D3PageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'history/:id',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'bbf1',
    loadChildren: () => import('./FD/bbf1/bbf1.module').then( m => m.Bbf1PageModule)
  },
  {
    path: 'bbf2',
    loadChildren: () => import('./FD/bbf2/bbf2.module').then( m => m.Bbf2PageModule)
  },
  {
    path: 'bff3',
    loadChildren: () => import('./FD/bff3/bff3.module').then( m => m.Bff3PageModule)
  },
  {
    path: 'll1',
    loadChildren: () => import('./FD/ll1/ll1.module').then( m => m.Ll1PageModule)
  },
  {
    path: 'll2',
    loadChildren: () => import('./FD/ll2/ll2.module').then( m => m.Ll2PageModule)
  },
  {
    path: 'll3',
    loadChildren: () => import('./FD/ll3/ll3.module').then( m => m.Ll3PageModule)
  },
  {
    path: 'dd1',
    loadChildren: () => import('./FD/dd1/dd1.module').then( m => m.Dd1PageModule)
  },
  {
    path: 'dd2',
    loadChildren: () => import('./FD/dd2/dd2.module').then( m => m.Dd2PageModule)
  },
  {
    path: 'dd3',
    loadChildren: () => import('./FD/dd3/dd3.module').then( m => m.Dd3PageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
