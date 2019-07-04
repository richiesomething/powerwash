import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {services} from '../services';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  service;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(service) {
    window.alert('Your service has been added to the cart!');
    this.cartService.addToCart(service);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service = services[+params.get('productId')];
    });
  }

}
