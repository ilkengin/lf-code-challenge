import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { Greeting } from '../../core/models/greeting.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello-details',
  templateUrl: './hello-details.component.html',
  styleUrls: ['./hello-details.component.scss']
})
export class HelloDetailsComponent implements OnInit {
  greeting: Greeting;

  constructor(private route: ActivatedRoute, private helloService: HelloService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.helloService.getMessage(id).subscribe(greeting => {
      console.log('greeting: %o', greeting);
      this.greeting = greeting;
    });
  }
}
