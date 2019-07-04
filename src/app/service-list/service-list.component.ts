import { Component, OnInit } from '@angular/core';
import { services } from '../services';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services = services;
  share() {
    window.alert('The service has been shared');
  }
 onNotify() {
    window.alert('You will be notified when the service goes on sale');
  }

  constructor() { }

  ngOnInit() {
  }

}
