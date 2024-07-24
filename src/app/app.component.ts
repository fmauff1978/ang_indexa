import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import agenda from './agenda.json'
import { FormsModule } from '@angular/forms';
import { FormContatoComponent } from "./paginas/form-contato/form-contato.component";


interface Contato{

  id: number;
  nome: string;
  telefone: string;}




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ContainerComponent, CabecalhoComponent, SeparadorComponent, ContatoComponent, FormsModule, FormContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
contatos: Contato[] = agenda;

filtro: string = '';


filtrarBusca ():Contato[]{

  if (!this.filtro){
    return this.contatos
  }
  return this.contatos.filter(contato=>{

    return contato.nome.toUpperCase().includes(this.filtro.toUpperCase())
  })
}

filtrarContatos(letra: string): Contato[]{

  return this.filtrarBusca().filter(contato=>{
    return contato.nome.toUpperCase().startsWith(letra)
  })


}

}
