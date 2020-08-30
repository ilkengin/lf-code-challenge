import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { Greeting } from '../../core/models/greeting.model';
import { ActivatedRoute } from '@angular/router';
import { GeneralErrorStateMatcher } from '../general-error-state-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello-details',
  templateUrl: './hello-details.component.html',
  styleUrls: ['./hello-details.component.scss']
})
export class HelloDetailsComponent implements OnInit {
  greeting: Greeting;
  isEditing = false;
  canEdit = true;

  matcher = new GeneralErrorStateMatcher();

  greetingForm = new FormGroup({
    message: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private helloService: HelloService) {}

  ngOnInit(): void {
    this.helloService.detailsOpened();
    const id = this.route.snapshot.paramMap.get('id');
    this.helloService.getMessage(id).subscribe(greeting => {
      this.greeting = greeting;
      this.greetingForm.get('message').setValue(greeting.message);
    });
    if (id === 'default') {
      this.canEdit = false;
    }
  }

  cancel() {
    this.greetingForm.reset();
    this.greetingForm.get('message').setValue(this.greeting.message);
    this.isEditing = !this.isEditing;
  }

  save() {
    this.helloService.updateGreeting(this.greeting.id, this.greetingForm.get('message').value).subscribe(greeting => {
      this.greeting = greeting;
      this.greetingForm.reset();
      this.greetingForm.get('message').setValue(this.greeting.message);
      this.isEditing = !this.isEditing;
    });
  }
}
