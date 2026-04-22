import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],  // Adicione aqui
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  textoDigitado: string = '';
  
}


