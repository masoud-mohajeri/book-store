import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PublishersService } from '../shared/services/publishers.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit, OnDestroy {
  pageState = 'offers';
  subscriptions: Subscription[] = [];
  publishers: User[];
  constructor(private publishersService: PublishersService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.publishersService.getAllPublishers().subscribe((pubs) => {
        this.publishers = pubs;
      })
    );
  }

  segmentChanged(event: any) {
    this.pageState = event.detail.value;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
