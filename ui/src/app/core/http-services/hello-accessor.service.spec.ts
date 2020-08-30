import { TestBed } from '@angular/core/testing';
import { HelloAccessorService } from './hello-accessor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HelloAccessorService', () => {

    let service: HelloAccessorService;

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            imports: [
              HttpClientTestingModule
            ],
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
