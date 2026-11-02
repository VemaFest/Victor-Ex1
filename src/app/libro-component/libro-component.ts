import { Component } from '@angular/core';
import { LogoutComponent } from '../logout-component/logout-component';

interface Libro {
  id: number;
  nombre: string;
  autor: string;
}

@Component({
  imports: [LogoutComponent],
  selector: 'app-libro-component',
  styleUrl: './libro-component.css',
  templateUrl: './libro-component.html',
})
export class LibroComponent {
  libros: Libro[] = [{id: 0, nombre: 'Libro 1', autor: 'Autor 1'},{id: 1, nombre: 'Libro 2', autor: 'Autor 2'}];
  libro: Libro = {id: 0, nombre: '', autor: ''};
}

