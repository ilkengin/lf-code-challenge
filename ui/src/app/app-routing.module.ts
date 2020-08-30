import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloRoutingModule } from './hello/hello-routing.module';

const routes: Routes = [
  { path:'hello', loadChildren: () => import('./hello/hello.module').then(h => h.HelloModule) },
  { path: '**', redirectTo: 'hello' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
