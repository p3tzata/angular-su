import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product.entity';
import { ProductService } from '../service/productService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor() { 
    const productService = new ProductService();
    this.products = productService.getAllProduct();
  }



  ngOnInit(): void {
  }

}
