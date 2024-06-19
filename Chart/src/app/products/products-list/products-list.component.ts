import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [MessageService]
})
export class ProductsListComponent {
  public products: Products[] = [];

  constructor(private productService: DataService, private route: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.productService.FetchData().subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    })

  }

  // to delete the product 
  Delete(product: Products) {
    let msg = confirm("Are You Sure You Want to Delete Product!!!")
    if (msg) {
      this.products = this.products.filter((data: any) => data.id !== product.id)
      this.productService.DeleteData(product).subscribe({
        next: (res: any) => {
          console.log(res);

        },
        error: (err: any) => {
          console.log(err);

        },
        complete: () => {
          this.messageService.add({ severity: 'warn', summary: 'Success', detail: `${product.title} deleted Successfully` });
        }
      })
    }

  }

  // to edit product details 
  Edit(product: Products) {
    this.productService.productDetails.next(product)
    this.route.navigate(["products/form"])
    console.log(product);

  }

  // to sort product in Ascending or descending Order 
  Asort() {
    this.products.sort((a: any, b: any) => {
      return a.title.localeCompare(b.title);
    });
  }

  Dsort() {
    this.products.sort((a: any, b: any) => {
      return b.title.localeCompare(a.title);
    });
  }

}
