import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoria } from '../../model/categoria.model';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  constructor() { }
 
  @Input()
  categoria = {} as ICategoria;

  @Output()
  private salvaCategoriaEventPublisher = new EventEmitter<ICategoria>();

  ngOnInit(): void {
    console.log(this.categoria);
  }

  //irá emitir o evento do estado novo da categoria
  salvar(){
    this.salvaCategoriaEventPublisher.emit(this.categoria);
  }

  disable(){
    return !this.categoria.descricao || this.categoria.descricao.length > 30;
  }

}
