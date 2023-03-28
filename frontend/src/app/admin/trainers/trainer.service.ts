import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppConstants } from 'src/app/app-constants';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  list(pagination: Pagination): Observable<any> {
    let params = new HttpParams()
    .set('page', String(pagination.page))
    .set('linesPerPage', String(pagination.linesPerPage))
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http.get<any>(AppConstants.backendServer + 'trainers', { params });
  }
}
