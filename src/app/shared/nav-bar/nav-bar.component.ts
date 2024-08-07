import { Component, OnInit } from '@angular/core';
import { Pages } from 'src/app/Defaults/PageRoutes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //links
  branches = Pages.branches;

}
