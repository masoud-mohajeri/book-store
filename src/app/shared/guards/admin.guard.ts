import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../user.model';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.authService.userInfo.subscribe((user) => {
        resolve(user);
      });
    }).then((user: User) => {
      if (user != null && user.status === 'ADMIN') {
        return true;
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
