import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-notification',
  templateUrl: './error-notification.component.html',
  styleUrls: ['./error-notification.component.scss']
})
export class ErrorNotificationComponent implements OnInit {

  @Input() errorMessages = [];
  constructor() { }

  ngOnInit(): void {
  }

}
