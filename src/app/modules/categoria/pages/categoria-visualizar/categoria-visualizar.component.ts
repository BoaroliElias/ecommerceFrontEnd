import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';
// import { ICategoria } from importar categoria 

@Component({
  selector: 'app-categoria-visualizar',
  templateUrl: './categoria-visualizar.component.html',
  styleUrls: ['./categoria-visualizar.component.css']
})
export class CategoriaVisualizarComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute) { }
  
  categoria = {} as ICategoria;

  // dessa forma ca fazer categoria. vem as atributos da interface

  ngOnInit(): void {
    this.getOne(this.activatedRoute.snapshot.params.idCategoria);
  }

  getOne(id: number){
    this.categoriaService.getOne(id)
    .then(result => {
      // console.log(result);
      this.categoria = result;
    })
  }
}
