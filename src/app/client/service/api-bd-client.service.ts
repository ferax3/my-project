import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiBdClientService {
  //створити службу для клієнтських запитів HTTP
  constructor(private httpClient: HttpClient) { }
  //отримуємо результати запиту
  getDate(url: string){
    return this.httpClient.get(url);
  }
}
