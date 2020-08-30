import { TestBed } from '@angular/core/testing';
import { HelloService } from './hello.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HelloService', () => {

    let service: HelloService;

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            imports: [
              HttpClientTestingModule
            ],
            providers: [
                HelloService
            ]
        });
    });

  it('should create the HelloService', () => {
    service = TestBed.inject(HelloService);
    expect(service).toBeTruthy();
  });
});
