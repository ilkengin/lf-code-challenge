import { TestBed } from '@angular/core/testing';
import { HelloService } from './hello.service';

describe('HelloService', () => {

    let service: HelloService;

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [
                HelloService
            ]
        });
    });

  it('should create the HelloAccessorService', () => {
    service = TestBed.inject(HelloService);
    expect(service).toBeTruthy();
  });
});
