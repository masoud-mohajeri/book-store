import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: User = null;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.userInfo.subscribe((userSub) => {
      this.user = userSub;
    });
  }
}
