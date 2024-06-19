import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products-chart',
  templateUrl: './products-chart.component.html',
  styleUrls: ['./products-chart.component.css']
})
export class ProductsChartComponent {

  public products: any;
  view: any = [800, 500];

  // options
  gradient = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Products';
  yAxisLabel = 'Price';

  colorScheme :any= {
    domain: ['#5AA44', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(private productSevice:DataService) { }

  ngOnInit():void{
    this.productSevice.FetchData().subscribe({
      next:(res:any)=>{
        this.products=res.map((product:any) => {
          return {
            name: product.title,
            value: Number(product.price) 
          };
        });
      }
    })
  }

  onSelect(event:any) {
    console.log(event);
  }
}
