import { NgModule } from '@angular/core';
import { HelloListComponent } from './hello-list/hello-list.component';
import { HelloRoutingModule } from './hello-routing.module';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { HelloDetailsComponent } from './hello-details/hello-details.component';
import { HelloCreateDialogComponent } from './hello-create-dialog/hello-create-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    HelloListComponent,
    HelloDetailsComponent,
    HelloCreateDialogComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class HelloModule { }
