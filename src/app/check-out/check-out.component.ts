
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit { 
  cart$: Observable<ShoppingCart>;
 

  constructor(private shoppingCartServive: ShoppingCartService ){}

  async ngOnInit(){
    this.cart$ = await this.shoppingCartServive.getCart();
   
  }
  

 
}
