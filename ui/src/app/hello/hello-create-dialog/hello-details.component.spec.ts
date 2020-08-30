import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloDetailsComponent } from './hello-details.component';

describe('HelloDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
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
