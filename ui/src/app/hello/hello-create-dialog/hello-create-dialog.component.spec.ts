import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloCreateDialogComponent } from './hello-create-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HelloCreateDialogComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HelloCreateDialogComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  }));

  it('should create the HelloCreateDialogComponent', () => {
    const fixture = TestBed.createComponent(HelloCreateDialogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
