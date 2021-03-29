import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ShCardService } from '../services/shcard.service';
import { User } from '../user.model';

@Component({
  selector: 'app-customer-tab',
  templateUrl: './customer-tab.component.html',
  styleUrls: ['./customer-tab.component.scss'],
})
export class CustomerTabComponent implements OnInit {
  user: User;
  // status = 'none';
  badgeNumber = 0;
  isAuth = false;
  constructor(
    private authService: AuthService,
    private shCardService: ShCardService
  ) {}

  ngOnInit() {
    this.authService.userInfo.subscribe((userSub: User) => {
      this.user = userSub;
    });

    this.shCardService.cardListEmitter.subscribe((shCardList) => {
      this.badgeNumber = shCardList.length;
    });
  }

  onLogout() {
    this.authService.logOut();
  }

  userLog() {
    console.log(this.user);
  }
}
