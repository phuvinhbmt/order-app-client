import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScalapayService {

  backendURL = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) { }

  /**
   * Send the POST request to the backend using form data collected from users
   * @param httpBody The request body
   */
  public createOrder(httpBody: any): Observable<any> {
    return this.http.post<any>(this.backendURL, httpBody);
  }
}
