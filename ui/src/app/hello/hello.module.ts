import { NgModule } from '@angular/core';
import { HelloListComponent } from './hello-list/hello-list.component';
import { HelloRoutingModule } from './hello-routing.module';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { HelloDetailsComponent } from './hello-details/hello-details.component';

@NgModule({
  declarations: [
    HelloListComponent,
    HelloDetailsComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class HelloModule { }
