import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataItem } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/mock-data.json';  

  constructor(private http: HttpClient) {}

  fetchData(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(this.dataUrl)
      .pipe(
        catchError(this.handleError<DataItem[]>('fetchData', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(\`\${operation} failed: \${error.message}\`);
      return of(result as T);
    };
  }
}
