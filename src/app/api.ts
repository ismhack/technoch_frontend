import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'access-control-request-method': 'GET', 'Origin': "'"+ window.location.origin + "'"})

 constructor(private http: HttpClient) {
  }
 getMessage() {
    return this.http.get(`/`);
  }

  postContact(message:any){

    return this.http.post(`/api/contact`, message, 
      {headers:
        this.headers
      }
    );
  }
}