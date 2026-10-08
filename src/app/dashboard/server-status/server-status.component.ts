import { Component, OnDestroy, OnInit } from '@angular/core';

type ServeStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  status: ServeStatus[] = ['online', 'offline', 'unknown'];
  currentStatus: ServeStatus = 'online';

  private intervalId?: ReturnType<typeof setInterval>;

  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.floor(Math.random() * this.status.length);
  //     this.currentStatus = this.status[rnd];
  //   }, 3000);
  // }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      const rnd = Math.floor(Math.random() * this.status.length);
      this.currentStatus = this.status[rnd];
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
