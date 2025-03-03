import { Injectable } from '@angular/core';
import { State, User } from '../../model/modelModule';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: State = new State();
  stateSubject: BehaviorSubject<State> = new BehaviorSubject<State>(this.state);
  state$: Observable<State> = this.stateSubject.asObservable();

  constructor() { 
    this.stateSubject.next(this.state);
  }

  setState(val: State){
    this.stateSubject.next(val);
  }

  getState(){
    return this.state;
  }

  setUser(val: User){
    this.state.user = val;
    this.stateSubject.next(this.state);
  }

  getUser(){
    return this.state.user;
  }

  setIsLoggedIn(val: boolean){
    return this.state.isLoggedIn = val;
    this.stateSubject.next(this.state);
  }

  getIsLoggedIn(){
    return this.state.isLoggedIn;
  }
}
