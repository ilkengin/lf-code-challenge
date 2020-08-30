import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelloService } from '../hello.service';
import { Greeting } from '../../core/models/greeting.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello-list',
  templateUrl: './hello-list.component.html',
  styleUrls: ['./hello-list.component.scss']
})
export class HelloListComponent implements OnInit, OnDestroy {
  greetings: Greeting[];

  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private helloService: HelloService
  ) {}

  ngOnInit(): void {
    this.helloService.getAllMessages().subscribe(greetings => {
      this.greetings = greetings;
    });
    this.subscription = this.helloService.changed().subscribe(this.greetingChanged.bind(this));
  }

  goToDetails(greeting: Greeting) {
    this.router.navigate([greeting.id], {relativeTo:this.route});
  }

  greetingChanged(greeting: Greeting) {
    const index = this.greetings.findIndex(g => g.id === greeting.id)
    if (index > -1) {
      this.greetings[index] = greeting;
    } else {
      this.greetings.push(greeting);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
