import { Injectable, OnInit } from '@angular/core';
import { HelloAccessorService } from '../core/http-services/hello-accessor.service';
import { Observable } from 'rxjs';
import { Greeting } from '../core/models/greeting.model';
@Injectable({
    providedIn: 'root'
})
export class HelloService implements OnInit {
    constructor(private helloAccessorService:HelloAccessorService) {}

    ngOnInit() {

    }

    public getAllMessages(): Observable<Greeting[]> {
        return this.helloAccessorService.getAllMessages();
    }

    public getDefaultMessage(): Observable<Greeting> {
        return this.getDefaultMessage();
    }

    public getMessage(id: string): Observable<Greeting> {
        return this.helloAccessorService.getMessage(id);
    }
}