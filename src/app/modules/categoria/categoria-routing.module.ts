// a responsabilidade desse cara é interpretar a URL...
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaCadastrarComponent } from "./pages/categoria-cadastrar/categoria-cadastrar.component";
import { CategoriaListaComponent } from "./pages/categoria-lista/categoria-lista.component";
import { CategoriaVisualizarComponent } from "./pages/categoria-visualizar/categoria-visualizar.component";

@Component({
    template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

// configura o caminho da URL para acessar essa tela
// tudo relacionado a categoria na URL tenho que colocar "/categoria"

const routes: Routes = [
    {
        path: 'categoria',
        // filhos do path raiz:
        children: [
            { path: '', redirectTo: '/categoria/Lista', pathMatch: 'full' },
            { path: 'lista', component: CategoriaListaComponent },
            { path: 'visualizar/:idCategoria', component: CategoriaVisualizarComponent},
            { path: 'cadastrar', component: CategoriaCadastrarComponent}
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class CategoriaRoutingModule { }
