import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiBdSupplierService } from './service/api-bd-supplier.service';
import { Supplier } from './Class/Supplier';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css',
  providers: [ApiBdSupplierService]
})
export class SupplierComponent {
  private url_sup: string = 'http://localhost:5000/api/supplier';
  title = 'FrontEnd';
  message: any;
  suppliers: Supplier[]=new Array();
  constructor(private apiService: ApiBdSupplierService){}
  ngOnInit(){
    this.apiService.getDate(this.url_sup).subscribe((data)=>{
      this.suppliers = new Array();
      this.message = data;
      this.suppliers = this.message;
      console.log(this.suppliers);
    });
  }
}
