import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../Models/menu.model';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
  }

}
