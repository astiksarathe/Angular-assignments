import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  productList: Array<Product> = [
    new Product('Produuct one', 200),
    new Product('Produuct two', 400)
  ];
  name: string = '';
  amount: number=0;
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    let product = new Product(this.name, this.amount)
    this.productList.push(product);
  }
}
