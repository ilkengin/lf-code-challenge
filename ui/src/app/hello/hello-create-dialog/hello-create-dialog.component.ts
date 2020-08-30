import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-hello-ccreate-dialog',
  templateUrl: './hello-create-dialog.component.html',
  styleUrls: ['./hello-create-dialog.component.scss']
})
export class HelloCreateDialogComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

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
