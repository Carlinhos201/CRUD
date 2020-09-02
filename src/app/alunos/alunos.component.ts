import { FormsModule } from '@angular/forms';
import { Alunos } from './alunos.model';
import { Observable } from 'rxjs';
import { getTestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'alunos',
  templateUrl:'./alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos : any = [];
  aluno: Alunos = {
    nome: '',
    
  }

  constructor(private alunosService:AlunosService) {}

  ngOnInit(): void {
  
    this.listaralunos();
  }

    listaralunos(){

     this.alunosService.ListarAlunos().subscribe(resultado => {this.alunos = resultado});
}

DeletarAlunos(id){
  Swal.fire({
    title: 'Tem certeza que deseja excluir?',
    text: "Você não poderá reverter!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim!'
  }).then((res) => {
    if (res.value) {
      this.alunosService.DeletarAluno(id).subscribe(res =>
        { 
          Swal.fire('Deletado!','O aluno foi deletado com sucesso!.','success')
          this.listaralunos() 
        });
    }else{
      Swal.fire('Cancelado', 'Item não excluído! :)', 'error')
    }
  })
}

SalvarAlunos(){
  this.alunosService.Salvaralunos(this.aluno).subscribe(res => {Swal.fire("Cadastrado com sucesso!","","success")
  {this.listaralunos()}});
}

EditarAlunos(){
  this.alunosService.AtualizarAlunos(this.aluno.id, this.aluno).subscribe(res => console.log("Alterado"));
}
}
