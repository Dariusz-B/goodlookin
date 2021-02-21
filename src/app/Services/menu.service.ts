import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { 
  }

  getMenu(): Observable<any>{
    return this.http.get ('http://webitrace.pl/projects/shop/source/darek/menu/getMenu');
  }
}
