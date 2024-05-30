import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { SupplierComponent } from './supplier/supplier.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientComponent, PharmacistComponent, SupplierComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
