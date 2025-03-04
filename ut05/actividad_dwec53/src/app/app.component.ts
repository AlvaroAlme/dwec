import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad_dwec53';
  nombre = 'Alvaro';
  apellidos = 'Almecija';
  imagen = 'https://farm4.static.flickr.com/3315/3446301458_981629b9ec_o.jpg';
  edad = 29;
}
