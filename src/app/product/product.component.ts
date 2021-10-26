import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  searchText = '';
  products = [
    {
      name: 'ac',
      price: '20.00',
      
    },
    {
      name: 'tv',
      price: '30.00',
    },
  ];
}
