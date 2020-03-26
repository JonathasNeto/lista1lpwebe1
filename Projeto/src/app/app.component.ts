import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Projeto';
  titulo = null;
  idade = null;
  pessoas= [
    
  ];
  adicionar(){
    
    this.pessoas.push(new Pessoa(this.titulo,this.idade));
    this.titulo = null;
    this.idade = null;
   
  }
  
 
}
class Pessoa{
  nome = null;
  idade = null;
  constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;
  }
  
  toString(){
    return this.nome+" e a Idade e: "+this.idade+" anos";
  }
}