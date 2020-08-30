import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GeneralErrorStateMatcher } from '../general-error-state-matcher';

@Component({
  selector: 'app-hello-ccreate-dialog',
  templateUrl: './hello-create-dialog.component.html',
  styleUrls: ['./hello-create-dialog.component.scss']
})
export class HelloCreateDialogComponent implements OnInit {

  matcher = new GeneralErrorStateMatcher();

  greetingForm = new FormGroup({
    message: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<HelloCreateDialogComponent>,
    private helloService: HelloService
  ) {}

  ngOnInit(): void { 
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.helloService.create(this.greetingForm.get('message').value).subscribe(greeting => {
      this.dialogRef.close(greeting);
    });
  }
}
