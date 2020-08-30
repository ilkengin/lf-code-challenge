import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelloCreateDialogComponent } from './hello/hello-create-dialog/hello-create-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void { }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(HelloCreateDialogComponent, {
      width: '250px'
    });
  }
}
