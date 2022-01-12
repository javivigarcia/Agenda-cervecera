import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Cerveza } from '../model/cerveza';
import { CervezaGetterService } from '../service/cerveza-getter.service';

//animaciones:
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cervezas-card',
  templateUrl: './cervezas-card.component.html',
  styleUrls: ['./cervezas-card.component.sass'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CervezasCardComponent implements OnInit {
  @Input() currentBeer!: Cerveza;


  constructor(private service: CervezaGetterService) { }

  ngOnInit(): void {

  }


  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  


 
}
