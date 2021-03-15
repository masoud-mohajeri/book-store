import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuth = new BehaviorSubject<boolean>(false);
  userInfo = new BehaviorSubject<User>(null);

  constructor() {}

  login(username: string, password: number) {
    this.isAuth.next(true);
    this.userInfo.next({
      id: 1,
      name: 'masoud',
      status: 'ADMIN',
    });
  }

  // returnUserById(id: number) {
  //   let theId = id;
  //   return { id: 1, name: 'masoud', status: 'ADMIN' };
  // }
}
