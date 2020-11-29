import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isLoading: boolean = false;
  products: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productsService.getProducts()
      .subscribe(
        response => {
          this.isLoading = false;
          this.products = response;
        },
        error => {
          this.isLoading = false;
          console.log(error);
        }
      )
  }

}
