import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // user: User = null;
  user: Observable<User>;
  //

  slideOpts = {
    slidesPerView: 1,
  };

  //

  constructor(private authService: AuthService) {}
  ngOnInit() {
    //   this.authService.userInfo.subscribe((userSub) => {
    //     this.user = userSub;
    //   });
    // this.user = this.authService.userInfo.asObservable();
  }
  goToGit() {
    window.location.href = 'https://github.com/mohajerimasoud';
  }
}
