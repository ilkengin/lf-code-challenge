import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { Greeting } from '../../core/models/greeting.model';

@Component({
  selector: 'app-hello-ccreate-dialog',
  templateUrl: './hello-create-dialog.component.html',
  styleUrls: ['./hello-create-dialog.component.scss']
})
export class HelloCreateDialogComponent implements OnInit {
  greeting: Greeting;

  constructor(private helloService: HelloService) {}

  ngOnInit(): void { }
}
