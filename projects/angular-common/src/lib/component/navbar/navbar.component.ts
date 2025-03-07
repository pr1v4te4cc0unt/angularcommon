import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthenticationService, StateService } from '../../service/serviceModule';
import { State } from '../../model/modelModule';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  state: State | null = null;
  isLoggedIn: boolean = false;

  @Input() logoRoute: string = '/logout';
  @Input() logOutRoute: string = '/logout';
  @Input() homeRoute: string = '/home';
  @Input() aboutRoute: string = '/about';
  @Input() contactRoute: string = '/contact';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private stateService: StateService
  ) {
    this.stateService.state$.subscribe((result) => {
      this.isLoggedIn = result.isLoggedIn;
    })
  }

  logOut(){
    this.stateService.setIsLoggedIn(false);
    this.authenticationService.deleteSession();
    this.router.navigate(['']);
  }
}
