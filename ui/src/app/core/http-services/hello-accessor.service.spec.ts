import { TestBed } from '@angular/core/testing';
import { HelloAccessorService } from './hello-accessor.service';

describe('HelloAccessorService', () => {

    let service: HelloAccessorService;

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [
                HelloAccessorService
            ]
        });
    });

  it('should create the HelloAccessorService', () => {
    service = TestBed.inject(HelloAccessorService);
    expect(service).toBeTruthy();
  });
});
