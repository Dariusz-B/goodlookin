import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
  }

  getMultipleProducts({from=0,amount=10,category='all',subcategory='all',promo=null,trend=null,New=null,brand='all'}
  :{from?: number, amount?: number, category?: string, subcategory?: string, promo?: boolean, trend?: boolean, New?: boolean, brand?:string}): Observable<any>{
  
    var promoStr:string = promo==null ? 'all' : promo ? 'true' : 'false';
    var trendStr:string = trend==null ? 'all' : trend ? 'true' : 'false';
    var newStr:string   = New==null   ? 'all' : New   ? 'true' : 'false';

    let httpParams = new HttpParams()
    .set('from',from.toString())
    .set('amount',amount.toString())
    .set('category',category)
    .set('subcategory',subcategory)
    .set('promo',promoStr)
    .set('trend',trendStr)
    .set('new',newStr)
    .set('brand',brand);
    
    return this.http.get ('http://webitrace.pl/demo/api/darek/product/getMany',{params: httpParams});
  }
}