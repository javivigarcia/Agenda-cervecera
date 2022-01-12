import { Component, OnInit } from '@angular/core';
import { Cerveza } from '../model/cerveza';




type JSON = { nombre: string, telefono: string, fecha: string, genero: string, listaBeers: Cerveza[] }

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.sass']
})
export class ContactosComponent implements OnInit {
  public nombre!: string | null;
  public jsonElement!: JSON;
  public jsonArray: JSON[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < localStorage.length; i++) {
      this.nombre = localStorage.key(i);
      this.jsonElement = JSON.parse(localStorage.getItem(this.nombre || '{null}') || '{null}');
      this.jsonArray.push(this.jsonElement)
    }

  }

}
