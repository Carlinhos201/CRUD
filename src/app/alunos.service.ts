import { FormsModule } from '@angular/forms';
import { Alunos } from './alunos/alunos.model';
import { ConfigServiceService } from './config-service.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AlunosService {

readonly baseurl: string;
alunos : any[];

  constructor(private http:HttpClient) {

    this.baseurl = 'http://localhost:8000/api';
  }

  ListarAlunos(): Observable<Alunos[]>{

    return this.http.get<Alunos[]>(`${this.baseurl}/alunos`);
  }
  
  DeletarAluno(id:any): Observable<any>{

    return this.http.delete<any>(`${this.baseurl}/alunos/${id}`);
  }

  Salvaralunos(data: any): Observable<any>{

    return this.http.post<any>(`${this.baseurl}/alunos/criar`, data);
  }

  AtualizarAlunos(id: any, data: any): Observable<any>{
    return this.http.put<any>(`${this.baseurl}/alunos/${id}`, data);
}
}


