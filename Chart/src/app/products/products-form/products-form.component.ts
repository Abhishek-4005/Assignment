import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
  providers: [MessageService]
})
export class ProductsFormComponent {
  public ProductsForm: FormGroup;

  public Clicked: boolean = false

  constructor(private fb: FormBuilder, private productService: DataService, private messageService: MessageService) {
    this.ProductsForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      // image: ['', Validators.required]
    });

    this.productService.productDetails.subscribe(product => {
      this.ProductsForm.setValue({ ...product });
      console.log(product);
    });

  }

  // to Add Products 
  AddData() {
    this.Clicked = true
    if (this.ProductsForm.valid) {
      this.productService.AddData(this.ProductsForm.value).subscribe({
        next: (res: any) => {
          console.log(res);

        },
        complete: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: "New Product Added" });
          this.ProductsForm.reset()
        },
        error: (err: any) => {
          console.log(err);

        }
      })
    }
  }

  UpdateProduct(product: Products) {
    this.productService.UpdateData(product).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      complete: () => {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: `${product.title} Updated ` });
        this.ProductsForm.reset()
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}

