import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/shared/Users';
import { User } from 'src/app/shared/User';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user : string[];
  constructor() { }

  ngOnInit() {
    this.user = USERS[2].inCart;
  }

}
