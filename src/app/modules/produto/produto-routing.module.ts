// a responsabilidade desse cara é interpretar a URL...
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoListaComponent } from "./pages/produto-lista/produto-lista.component";

@Component({
    template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

// configura o caminho da URL para acessar essa tela
// tudo relacionado a categoria na URL tenho que colocar "/categoria"

const routes: Routes = [
    {
        path: 'produto',
        // filhos do path raiz:
        children: [
            { path: '', redirectTo: '/produto/Lista', pathMatch: 'full' },
            { path: 'lista', component: ProdutoListaComponent }
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    
    exports: [RouterModule]
  })
  export class ProdutoRoutingModule { }
