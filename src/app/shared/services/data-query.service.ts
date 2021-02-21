import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from '../interfaces/transactions';
import { environment } from '../../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class DataQueryService {

  private URL: string = 'https://api.jsonbin.io/b/603200ee7c58305d3957ebf1'

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transactions[]> {
    let options = {
      headers: new HttpHeaders({
        'secret-key': environment.jsonbin
      })
    }
    return this.http.get<Transactions[]>(this.URL, options)
  }
}
