import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloListComponent } from './hello-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HelloListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HelloListComponent
      ],
    }).compileComponents();
  }));

  it('should create the HelloListComponent', () => {
    const fixture = TestBed.createComponent(HelloListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
