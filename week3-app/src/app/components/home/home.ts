/* 3813ICT - week3 - demo */
import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
   title = signal('Home Page');
  

}
