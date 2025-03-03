import { ComponentFixture, TestBed } from '@angular/core/testing';

import { angularcommonComponent } from './angular-common.component';

describe('angularcommonComponent', () => {
  let component: angularcommonComponent;
  let fixture: ComponentFixture<angularcommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [angularcommonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(angularcommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
