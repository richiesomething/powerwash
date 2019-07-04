import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-service-alerts',
  templateUrl: './service-alerts.component.html',
  styleUrls: ['./service-alerts.component.css']
})
export class ServiceAlertsComponent implements OnInit {
  @Input() service;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
