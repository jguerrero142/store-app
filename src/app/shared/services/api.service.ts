
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URI = environment.wsUrl;

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T>{
    return this.http.get<T>(`${this.API_URI}/${url}`)
  }

  post<T, D>(url: string | number, data:D ): Observable<T> {
    return this.http.post<T>(`${this.API_URI}/${url}`, data)
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(`${this.API_URI}/${url}`, data );
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.API_URI}/${url}`);
  }

}
