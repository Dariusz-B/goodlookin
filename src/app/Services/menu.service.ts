import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { 
  }

  getMenu(): Observable<any>{
    return this.http.get ('https://cors-anywhere.herokuapp.com/http://webitrace.pl/projects/shop/source/darek/menu/getMenu');
  }
}
