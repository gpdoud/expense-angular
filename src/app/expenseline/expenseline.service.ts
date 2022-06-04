import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expenseline } from './expenseline.class';

@Injectable({
  providedIn: 'root'
})
export class ExpenselineService {

  baseurl: string = "http://localhost:5000/api/expenselines";

  constructor(
    private http: HttpClient
  ) { }

  // list(): Observable<Expenseline[]> {
  //   return this.http.get(`${this.baseurl}`) as Observable<Expenseline[]>;
  // }
  
  get(id: number): Observable<Expenseline> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Expenseline>;
  }
  
  create(expl: Expenseline): Observable<Expenseline> {
    return this.http.post(`${this.baseurl}`, expl) as Observable<Expenseline>;
  }
  
  change(expl: Expenseline): Observable<any> {
    return this.http.put(`${this.baseurl}/${expl.id}`, expl) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }

}
