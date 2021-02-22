import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from '../interfaces/transactions';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private URL: string = 'https://api.jsonbin.io/b/603200ee7c58305d3957ebf1/6'

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transactions[]> {
    let headers = {
      headers: new HttpHeaders({
        'secret-key': environment.jsonbin
      })
    }
    return this.http.get<Transactions[]>(this.URL, headers)
  }

  putTransactions(transactions: Transactions[]): Observable<any> {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'secret-key': environment.jsonbin,
        'versioning': 'false'
      })
    }
    return this.http.put('https://api.jsonbin.io/b/603200ee7c58305d3957ebf1', transactions, headers)
  }
}
