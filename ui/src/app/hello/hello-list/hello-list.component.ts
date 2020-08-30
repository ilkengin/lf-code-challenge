import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { Greeting } from '../../core/models/greeting.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello-list',
  templateUrl: './hello-list.component.html',
  styleUrls: ['./hello-list.component.scss']
})
export class HelloListComponent implements OnInit {
  greetings: Greeting[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private helloService: HelloService
  ) {}

  ngOnInit(): void {
    this.helloService.getAllMessages().subscribe(greetings => {
      this.greetings = greetings;
    });
  }

  goToDetails(greeting: Greeting) {
    this.router.navigate([greeting.id], {relativeTo:this.route});
  }
}
