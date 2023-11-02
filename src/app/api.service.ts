import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://aurorar11.local:9200/fake/detect?api_key=test';

  constructor(private http: HttpClient) {}

  postData(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
    });

    return this.http.post(this.apiUrl, data, { headers });
  }
}
