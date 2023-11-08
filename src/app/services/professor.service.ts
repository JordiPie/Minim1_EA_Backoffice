import { Injectable } from '@angular/core';
import { IProfessor } from '../models/professor';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private professorsUrl = 'http://localhost:9090/professors';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getProfessors(page: number, limit: number): Observable<any>{
    return this.http.get(`${this.professorsUrl}/${page}/${limit}`);
  }

  getProfessor(id: string): Observable<IProfessor> {
    const url = `${this.professorsUrl}/${id}`;
    return this.http.get<IProfessor>(url)
  }

  //////// Save methods //////////

  /** PUT: update the user on the server */
  updateProfessor(id: string, professor: any): Observable<any> {
    const url = `${this.professorsUrl}/${id}`;
    return this.http.put<IProfessor>(url, professor);
  }

  //////// Delete methods //////////

  //**DELETE: delete the user on the server */
  deleteProfessor(id: string): Observable<IProfessor> {
    const url = `${this.professorsUrl}/${id}`;
    return this.http.delete<IProfessor>(url);
  }
//CREATE: create a new user
  createProfessor(professor:any): Observable<any> {
    const url = `${this.professorsUrl}`;
    return this.http.post<IProfessor>(url,professor);
  }
}
