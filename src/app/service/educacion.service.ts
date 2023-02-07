import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  URL = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
      return this.httpClient.get<Educacion>(this.URL+ `detail/${id}`);
  }

  public save(Educacion: Educacion): Observable<any>{
      return this.httpClient.post<any>(this.URL+ `create`, Educacion);
  }

  public update(id: number, Educacion: Educacion): Observable<any> {
      return this.httpClient.put<any>(this.URL+ `update/${id}`, Educacion);
  }

  public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }

}
