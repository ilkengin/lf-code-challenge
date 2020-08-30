import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloCreateDialogComponent } from './hello-create-dialog.component';

describe('HelloCreateDialogComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HelloCreateDialogComponent
      ],
    }).compileComponents();
  }));

  it('should create the HelloDetailsComponent', () => {
    const fixture = TestBed.createComponent(HelloCreateDialogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
