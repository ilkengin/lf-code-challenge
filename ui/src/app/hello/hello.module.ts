import { NgModule } from '@angular/core';
import { HelloListComponent } from './hello-list/hello-list.component';
import { HelloRoutingModule } from './hello-routing.module';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { HelloDetailsComponent } from './hello-details/hello-details.component';
import { HelloCreateDialogComponent } from './hello-create-dialog/hello-create-dialog.component';
@NgModule({
  declarations: [
    HelloListComponent,
    HelloDetailsComponent,
    HelloCreateDialogComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class HelloModule { }
