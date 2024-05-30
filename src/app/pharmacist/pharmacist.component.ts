import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiBdPharmacistService } from './service/api-bd-pharmacist.service';
import { Pharmacist } from './Class/Pharmacist';

@Component({
  selector: 'app-pharmacist',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pharmacist.component.html',
  styleUrl: './pharmacist.component.css',
  providers: [ApiBdPharmacistService]
})
export class PharmacistComponent {
  private url_ph: string = 'http://localhost:5000/api/pharmacist';
  title = 'FrontEnd';
  message: any;
  pharmacists: Pharmacist[]=new Array();
  constructor(private apiService: ApiBdPharmacistService){}
  ngOnInit(){
    this.apiService.getDate(this.url_ph).subscribe((data)=>{
      this.pharmacists = new Array();
      this.message = data;
      this.pharmacists = this.message;
      console.log(this.pharmacists);
    });
  }
}
