import { ContainerComponent } from './../../componentes/container/container.component';
import { Component } from '@angular/core';
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-contato',
  standalone: true,
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css'
})
export class FormContatoComponent {

contatoForm: FormGroup;


  constructor(){

    this.contatoForm = new FormGroup({

      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', ),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      obs: new FormControl('')



    })  }

    salvarContato(){

      if (this.contatoForm.valid){

      console.log(this.contatoForm.value)}

    }


}
