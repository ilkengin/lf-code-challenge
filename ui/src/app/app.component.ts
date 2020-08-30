import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelloCreateDialogComponent } from './hello/hello-create-dialog/hello-create-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloService } from './hello/hello.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showAddbutton = true;

  constructor(private dialog: MatDialog, private helloService: HelloService) { 

    helloService.detailsStatusChanged().subscribe((detailsPageOpen) => {
      console.log('detailsPageOpen: ' + detailsPageOpen)
      this.showAddbutton = !detailsPageOpen;
    }
    )
  }

  ngOnInit(): void {  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(HelloCreateDialogComponent, {
      width: '250px'
    });
  }
}
