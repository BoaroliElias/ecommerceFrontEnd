import { Component, OnDestroy ,OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { RouteService } from 'src/app/commons/service/route.service';
import { ICategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})

export class CategoriaListaComponent implements OnInit {
//lista
  constructor(private categoriaService: CategoriaService,
    private routeService: RouteService) { }
 

categorias = {} as IPageConfig<ICategoria>;

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
     this.categoriaService.getAll()
     .then(result => {
      this.categorias = result; //verificar
     })
  }

  visualizar(categoria: any) {
    // console.log(categoria);
    this.routeService.navigate(`categoria/visualizar/${categoria.id}`)
  }
  //nao passamos o objeto inteiro categoria para renderizar pq:
  //motivo01- na lista de categoria n passamos o status, passamos somente id e descricao
  //padrão lock  otmist
  
  cadastrarNovaCategoria(){
    this.routeService.navigate(`categoria/cadastrar`)
  }

  atualizar(categoria: any) {
    this.routeService.navigate(`categoria/atualizar/${categoria.id}`)
  } 

}

