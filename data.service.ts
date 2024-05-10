import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchData(term: string): Observable<any> {
    return this.http.get<any>(\`http://localhost:3000/api/data/\${term}\`)
      .pipe(catchError(error => {
        throw 'error in fetching data';
      }));
  }
}
