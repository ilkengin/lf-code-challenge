import { Injectable, OnInit } from '@angular/core';
import { HelloAccessorService } from '../core/http-services/hello-accessor.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Greeting } from '../core/models/greeting.model';
@Injectable({
    providedIn: 'root'
})
export class HelloService implements OnInit {

    private changedSubject: Subject<Greeting> = new Subject(); 
    private detailsChangedSubject: Subject<boolean> = new Subject(); 


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

    public create(message: string) {
        return this.helloAccessorService.create(message).pipe(
            map(greeting => {
                this.changedSubject.next(greeting);
                return greeting;
            })
        );
    }

    updateGreeting(id: string, newMessage: string): Observable<Greeting> {
        return this.helloAccessorService.updateGreeting(id, newMessage);
    }

    public changed(): Observable<Greeting> {
        return this.changedSubject.asObservable();
    }

    public detailsStatusChanged(): Observable<boolean> {
        return this.detailsChangedSubject.asObservable();
    }

    public detailsOpened(): void {
        this.detailsChangedSubject.next(true);
    }

    public detailsClosed(): void {
        this.detailsChangedSubject.next(false);
    }
}