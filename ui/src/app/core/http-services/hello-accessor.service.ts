import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Greeting } from '../models/greeting.model';

@Injectable({
    providedIn: 'root'
})
export class HelloAccessorService implements OnInit {

    private readonly baseUrl = '/api/v1/hello/';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        
    }

    getAllMessages(): Observable<Array<Greeting>> {
        return this.http.get<Array<Greeting>>(this.baseUrl);
    }

    getDefaultMessage(): Observable<Greeting> {
        return this.http.get<Greeting>(this.baseUrl + 'default');
    }

    getMessage(userId: string): Observable<Greeting> {
        return this.http.get<Greeting>(this.baseUrl + userId);
    }

    create(message: string): Observable<Greeting> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        
        const greeting: Greeting = {
            id: null,
            message
        };

        return this.http.post<Greeting>(this.baseUrl, greeting, httpOptions);
    }
}