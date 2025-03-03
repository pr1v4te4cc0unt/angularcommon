import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthenticationService, UserService, StateService, LoadingSpinnerService } from '../../service/serviceModule';
import { User, State } from '../../model/modelModule';
import { ErrorDialogComponent } from '../componentModule';

@Component({
  selector: 'lib-default-login',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterLink,
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  animations: [
  ],
  templateUrl: './default-login.component.html',
  styleUrl: './default-login.component.scss'
})
export class DefaultLoginComponent implements OnInit {
  loginFormGroup: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
  });
  
  user: User | null = null;
  isLoading: boolean = false;
  state: State | null = null;
  @Input() redirect: string = "/home";

  fadeIn: boolean = true;

  constructor(
    private loginFormBuilder: FormBuilder, 
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private stateService: StateService,
    private router: Router,
    private loadingSpinnerService: LoadingSpinnerService,
    private dialog: MatDialog
    ) {
      this.loadingSpinnerService.isLoading$.subscribe((result) => {
        this.isLoading = result;
      });
      this.stateService.state$.subscribe((result) => {
        this.state = result;
      })
  }
  
  ngOnInit(): void {
    this.loginFormGroup = this.loginFormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() : void {
    this.login();
  }

  onEnter() : void {
    this.login();
  }

  login() : void {
    this.loadingSpinnerService.show();
    console.log("Logging in user...");
    if(this.loginFormGroup.valid){
      this.userService.getUserByCredentials(this.loginFormGroup.value.username, this.loginFormGroup.value.password)
        .subscribe({
          next: (data) => {
            if(this.user){
              this.stateService.setUser(data);
            }
          },
          error: (error) => {
            console.error(error);
            this.dialog.open(ErrorDialogComponent, { data: { message: error.message }, height: '250px', width: '750px' });
            this.loadingSpinnerService.hide();
          },

          complete: () => {
            console.log("Login successful.");
            this.loadingSpinnerService.hide();
            this.stateService.setIsLoggedIn(true);
            console.log(this.stateService);
            this.authenticationService.setSession();
            this.router.navigate([this.redirect]);
          }
      });
    }
    else{
      console.error("Invalid form");
    }
  }
}
