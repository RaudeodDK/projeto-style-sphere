import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section2',
  imports: [CommonModule],
  templateUrl: './section2.html',
  styleUrl: './section2.css',
})
export class Section2 {
  tours = [
    { texto: 'Camisa', img: 'img-1.png' },
    { texto: 'Calça', img: 'img-2.png' },
    { texto: 'variedades', img: 'img-3.png' },
     ];
}