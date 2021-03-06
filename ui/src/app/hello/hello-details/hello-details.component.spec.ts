import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloDetailsComponent } from './hello-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HelloDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HelloDetailsComponent
      ],
    }).compileComponents();
  }));

  it('should create the HelloDetailsComponent', () => {
    const fixture = TestBed.createComponent(HelloDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
