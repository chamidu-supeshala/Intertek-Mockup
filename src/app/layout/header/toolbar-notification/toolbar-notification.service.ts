import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToolbarNotificationModel } from './toolbar-notification.model';

@Injectable()
export class ToolbarNotificationService {
  notifications: ToolbarNotificationModel[];

  constructor(private http: HttpClient) {
    this.notifications = [
      {
        id: '1',
        title: 'notification',
        lastTime: '23 hrs',
        state: '1'
      },
      {
        id: '2',
        title: 'notification',
        lastTime: '23 hrs',
        state: 'state'
      },
      {
        id: '3',
        title: 'notification',
        lastTime: '23 hrs',
        state: 'state'
      },
      {
        id: '4',
        title: 'notification',
        lastTime: '23 hrs',
        state: 'state'
      },
      {
        id: '5',
        title: 'notification',
        lastTime: '23 hrs',
        state: 'state'
      }
    ];
  }

  select() {
    return this.notifications;
  }

  delete(notification) {
    const i = this.notifications.indexOf(notification);
    this.notifications = [
      ...this.notifications.slice(0, i),
      ...this.notifications.slice(i + 1)
    ];

    return this.notifications;
  }
}
