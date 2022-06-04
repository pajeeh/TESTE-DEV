import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/usuario';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario("","","(11)","",null,"");

  constructor(public service : UsuarioServiceService) { 


  }

  ngOnInit(): void {

  }

  submitted = false;
  handleFileInput(event:any){
    let files: FileList = event.target.files;

    this.usuario.curriculo = files.item(0);

  }
  onSubmit() { 
    this.service.addUsuario(this.usuario).subscribe({
      complete : () => {
        alert("Cliente adicionado")
      },  
      error: (msg) =>{
        alert("Um erro ocorreu")
      }
    })
  }
  newUsuario() {
    this.usuario = new Usuario("","","(11)","",null,"");
  }

}
