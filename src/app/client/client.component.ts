import { Client } from './Class/Client';
import { Component } from '@angular/core';
import { ApiBdClientService } from './service/api-bd-client.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
  providers: [ApiBdClientService]
})
export class ClientComponent {
  private url_cl: string = 'http://localhost:5000/api/client';
  title = 'FrontEnd';
  message: any;
  clients: Client[]=new Array();
  constructor(private apiService: ApiBdClientService){}
  ngOnInit(){
    this.apiService.getDate(this.url_cl).subscribe((data)=>{
      this.clients = new Array();
      this.message = data;
      this.clients = this.message;
      console.log(this.clients);
    });
  }
}
