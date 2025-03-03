import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRegistrationComponent } from './default-registration.component';

describe('RegistrationComponent', () => {
  let component: DefaultRegistrationComponent;
  let fixture: ComponentFixture<DefaultRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
