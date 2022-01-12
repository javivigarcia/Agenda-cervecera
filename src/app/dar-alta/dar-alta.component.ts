import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Cerveza } from '../model/cerveza';
import { Contacto } from '../model/contacto';
import { CervezaGetterService } from '../service/cerveza-getter.service';

//--------------------tipos:----------------------------
type JSON = { nombre: string, telefono: string, fecha: string, genero: string, listaBeers: Cerveza[] }

@Component({
  selector: 'app-dar-alta',
  templateUrl: './dar-alta.component.html',
  styleUrls: ['./dar-alta.component.sass']
})
export class DarAltaComponent implements OnInit {
  private i: number = 0;
  public listaContactos: Contacto[] = [];
  public beerList: Cerveza[] = [];
  public beerListDeContacto: Cerveza[] = [];
  public checkboxCounter: number = 0;

  formData = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    cellPhone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    datePicker: ['', Validators.required],
    sexo: ['', Validators.required],
    check: ['', Validators.required]
  })



  constructor(private formBuilder: FormBuilder, private service: CervezaGetterService) { }

  ngOnInit(): void {
    // a continuación utilizo un any que dijo que no se debía usar, pero en esta ocasion concreta no sabía como hacerlo si no era con un any porque es de la únicaq forma que aprendí a hacerlo :((
    this.service.getInfoCerveza().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        let beerSingle = new Cerveza(data[i].id, data[i].name, data[i].description, data[i].image_url, false)
        this.beerList.push(beerSingle);
      }
      console.log(this.beerList)
    })

    //--------------------Parte del OnInit correspondiente al listado:-------------------------------
    for (let i = 0; i < localStorage.length; i++) {
      this.nombre = localStorage.key(i);
      this.jsonElement = JSON.parse(localStorage.getItem(this.nombre || '{null}') || '{null}');
      this.jsonArray.push(this.jsonElement)
    }
  }


  beerChecker(): void {
    this.beerListDeContacto = []
    for (let j = 0; j < this.beerList.length; j++) {
      if (this.beerList[j].estado == true) {
        this.beerListDeContacto.push(this.beerList[j])
      }
    }

  }

  crearContacto(): void {
    let contactoTest = new Contacto(this.formData.get('name')?.value, this.formData.get('cellPhone')?.value, this.formData.get('datePicker')?.value, this.formData.get('sexo')?.value, this.beerListDeContacto)
    localStorage.setItem(`${this.formData.get('name')?.value}`, JSON.stringify(contactoTest))
    //console.log(localStorage.getItem(`${this.formData.get('name')?.value}`))
    this.checkboxCounter = 0;
    alert('contacto guardado!!')
    this.reload();



  }


  onCheckBoxChange(e: Event, i: Cerveza): void {
    i.estado = !i.estado
    console.log('Has cambiado el valor a :', i.estado)
    if (i.estado == true) {
      this.checkboxCounter = this.checkboxCounter + 1;
    } else {
      this.checkboxCounter = this.checkboxCounter - 1;
    }
    console.log(this.checkboxCounter)
  }

  reload(): void {
    window.location.reload();
  }

  //-------------------Listado de contactos:-----------------------------------
  public nombre!: string | null;
  public jsonElement!: JSON;
  public jsonArray: JSON[] = [];

}
