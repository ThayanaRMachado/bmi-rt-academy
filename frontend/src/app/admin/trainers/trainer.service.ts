import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppConstants } from 'src/app/app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get<any>(AppConstants.backendServer + 'trainers');
  }
}
