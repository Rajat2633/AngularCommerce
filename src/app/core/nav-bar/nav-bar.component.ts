import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  basket$:any;
  currentUser$:string;
  constructor() { }

  ngOnInit(): void {
    this.basket$=4;
    this.currentUser$=null;
  }

}
