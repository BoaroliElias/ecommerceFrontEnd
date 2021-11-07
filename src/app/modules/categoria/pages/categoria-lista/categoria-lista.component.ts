import { Component, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/commons/services/models/pagination.model';
import { RoutesService } from 'src/app/commons/services/routes.service';
import { CategoriaService } from '../../service/categororia.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {
//lista
  constructor(private categoriaService: CategoriaService,
    private routeService: RoutesService) { }
 

categorias = {} as IPageConfig<ICategoria> | undefined;

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
    console.log(categoria);
    this.routeService.navigate(`/categoria/visualizar/${categoria.id}`)
  }
  //nao passamos o objeto inteiro categoria para renderizar pq:
  //motivo01- na lista de categoria n passamos o status, passamos somente id e descricao
  //padrão lock  otmist
  
  cadastrarNovaCategoria(){
    this.routeService.navigate(`/categoria/cadastrar`)
  }
}

//testee