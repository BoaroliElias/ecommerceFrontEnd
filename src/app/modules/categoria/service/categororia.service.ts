import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPageConfig } from 'src/app/commons/services/models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpCLient: HttpClient) { }
  
// retornar uma função http, fazendo uma requisição
  getAll():Promise<IPageConfig<ICategoria>>{
    return this.httpCLient.get<IPageConfig<ICategoria>>('http://localhost:8080/categoria/') //a porta é a do backend
                          .toPromise();
  }

  getOne(id: number): Promise<ICategoria> {
    return this.httpCLient
    .get<ICategoria>(`http://localhost:8080/categoria/${id}`)
    .toPromise();
  }

}

