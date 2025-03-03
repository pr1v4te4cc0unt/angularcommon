import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultLoginComponent } from './default-login.component';

describe('LoginComponent', () => {
  let component: DefaultLoginComponent;
  let fixture: ComponentFixture<DefaultLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
