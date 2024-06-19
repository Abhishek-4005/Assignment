import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsChartComponent } from './products-chart/products-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// thirdParty library
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';

const routes: Routes = [
  { path: "", component: ProductsListComponent},
  { path: "form", component: ProductsFormComponent },
  { path: "chart", component: ProductsChartComponent },
  { path: "**", redirectTo: "" }
]


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsFormComponent,
    ProductsChartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    ToastModule,
    DropdownModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
