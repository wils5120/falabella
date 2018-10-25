
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Compra } from '../compra';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

   ver: String = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getCompra() {
    return this.http.get<Compra[]>(`${this.ver}/task`)
    .pipe(
    map(res => res)
    );
  }

  addCompra(newCompra: Compra) {
    return this.http.post<Compra>(`${this.ver}/task`, newCompra )
    .pipe(
      map(res => res)
    );
  }

  updateCompra(newCompra) {
    return this.http.put(`${this.ver}/task/${newCompra._id}`, newCompra)
    .pipe(
      map(res => res)
    );
  }

  deleteCompra(id) {
    return this.http.delete<Compra>(`${this.ver}/task/${id}`)
    .pipe(
      map(res => res)
    );
  }
}
