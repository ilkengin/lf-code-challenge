import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloListComponent } from './hello-list/hello-list.component';
import { HelloDetailsComponent } from './hello-details/hello-details.component';

const routes: Routes = [
  { path:'', component: HelloListComponent },
  { path: ':id', component: HelloDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
