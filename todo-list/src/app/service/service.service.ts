import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/sendEmail/createStudent');
  }

  // getAll(id: number): Observable<any>{
  //   return this.httpClient.delete('http://localhost:8080/sendEmail/delete' + )
  // }
}
