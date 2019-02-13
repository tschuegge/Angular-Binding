import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { ComponentTreeComponent } from './component-tree/component-tree.component';

const routes: Routes = [
  { path: 'single', component: SingleComponent },
  { path: 'component-tree', component: ComponentTreeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/single' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
