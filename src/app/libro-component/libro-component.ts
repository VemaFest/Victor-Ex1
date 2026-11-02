import { Component } from '@angular/core';
import { LogoutComponent } from '../logout-component/logout-component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
interface Libro {
  id: number;
  nombre: string;
  autor: string;
}

@Component({
  imports: [LogoutComponent, FormsModule],
  selector: 'app-libro-component',
  styleUrl: './libro-component.css',
  templateUrl: './libro-component.html',
})
export class LibroComponent {
  libros: Libro[] = [{id: 0, nombre: 'Libro 1', autor: 'Autor 1'},{id: 1, nombre: 'Libro 2', autor: 'Autor 2'}];
  libro: Libro = {id: 0, nombre: '', autor: ''};
  indexEdit: number = -1;

  constructor(private router: Router){
    this.router.navigate([localStorage.getItem('secionbiblio') ? '/libros' : '/login'])
    this.libros = JSON.parse(localStorage.getItem('libros') ?? '[]');  
  }

  formulario() {
    const m = this.libro;
    if( !this.libro.nombre || !this.libro.autor)
      return alert("Complete todos los campos correctamente");
    
    this.indexEdit === -1 ? this.registrarlibro(m) : this.actualizarlibro(m);
    localStorage.setItem('libros', JSON.stringify(this.libros))
    this.refrescarFormulario();
  }

  registrarlibro(m: Libro) {
    m.id = this.libros.reduce((max, x) => Math.max(max, x.id), 0) + 1;
    this.libros.push(m);
  }

  actualizarlibro(m : Libro) {

  }

  refrescarFormulario() {
    this.libro = {id: 0, nombre: '', autor: ''};
    this.indexEdit = -1;
  }

}

