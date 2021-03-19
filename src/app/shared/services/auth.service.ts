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
      id: '1',
      name: 'masoud',
      status: 'PUBLISHER',
      activatedStatus: true,
      address: ' تسنا بلهسیا  سهخب یلاهبل  اخهبل بسیلی بلی ',
    });
  }
}
