import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-section1',
  templateUrl: './section1.html',
  styleUrls: ['./section1.css'],
})
export class Section1 {
   slides = [
    '/banner/bnr1.png',
    '/banner/ban2.png'
  ];

  current = 0;

  next() {
    this.current = (this.current + 1) % this.slides.length;
  }

  prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
  }
}
