import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
  textoPadrao = 'Testando padrao';
  textoPrincipal = '';
 
  setTextoPrincipal(texto: string){
    this.textoPrincipal = texto;
  }
}
