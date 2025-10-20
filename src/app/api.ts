import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Origin': "'"+ window.location.origin + "'"})

 constructor(private http: HttpClient) {
  }
 getMessage() {
    return this.http.get(`/`);
  }

  postContact(message:any){

    return this.http.post(`${environment.apiUrl}/api/contact`, message, 
      {headers:
        this.headers
      }
    );
  }
}