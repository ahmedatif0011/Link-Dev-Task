import { Component, OnInit } from '@angular/core';
import { PageRoutes } from 'src/environments/PageRoutes';
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
  branches = PageRoutes.branchList;

}
