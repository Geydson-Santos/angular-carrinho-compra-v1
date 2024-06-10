import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080/api/product/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

  saveProduto(produto: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, produto);
  }

  updateProduto(produto: any): Observable<any> {
    return this.http.put<any>(this.baseUrl, produto);
  }

  delete(id: number) {
    this.http.delete(this.baseUrl + id);
  }
}
