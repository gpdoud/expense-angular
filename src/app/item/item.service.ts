import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseurl: string = "http://localhost:5000/api/items";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Item[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Item[]>;
  }
  
  get(id: number): Observable<Item> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Item>;
  }
  
  create(item: Item): Observable<Item> {
    return this.http.post(`${this.baseurl}`, item) as Observable<Item>;
  }
  
  change(item: Item): Observable<any> {
    return this.http.put(`${this.baseurl}/${item.id}`, item) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
