import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
  { path: 'advanced', loadChildren: () => import('./advanced/advanced.module').then(m => m.AdvancedModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
