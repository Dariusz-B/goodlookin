import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem, MenuState } from 'src/app/Models/menu.model';
import * as MenuActions from './../../actions/menu.actions';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {


  constructor() {
  }
  ngOnInit(): void {
  }
  
}
