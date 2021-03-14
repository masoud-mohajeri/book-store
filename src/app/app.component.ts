import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { User } from './shared/user.model';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // user: User = null;
  // closed$ = new Subject<any>();
  // showTabs = false;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    // this.authService.userInfo.subscribe((userSub) => {
    //   this.user = userSub;
    // });

    // this.router.events
    //   .pipe(
    //     filter((e) => e instanceof NavigationEnd),
    //     takeUntil(this.closed$)
    //   )
    //   .subscribe((event) => {
    //     if (
    //       event['url'] === '/home' ||
    //       event['url'] === '/login' ||
    //       event['url'] === '/products-buy' ||
    //       event['url'] === '/shopping-card' ||
    //       event['url'] === '/customer' ||
    //       event['url'] === '/user'
    //     ) {
    //       this.showTabs = true; // <-- hide tabs on specific pages
    //     }
      // });
  }
}
