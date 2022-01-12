import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cerveza } from '../model/cerveza';

/* type punkApiBeer = {id: number,
name: string,
tagline: string,
first_brewed: string,
description: string,
image_url: string,
abv: number,
ibu: number,
target_fg: number,
target_og: number,
ebc: number,
srm: number,
ph: number,
attenuation_level: number,
volume: {
  value: number,
  unit: string
},
boil_volume: {
  value: number,
  unit: string
},
method: {
  mash_temp: [
    {
      temp: {
        value: number,
        unit: string
      },
      duration: number,
    }
  ],
  fermentation: {
    temp: {
      value: number,
      unit: string
    }
  },
  twist: null
},
ingredients: {
  malt: [
    {
      name: string,
      amount: {
        value: number,
        unit: string
      }
    }
  ],
  hops: [
    {
      name: string,
      amount: {
        value: number,
        unit: string
       },
       add: string,
       attribute: string
     },
     {
       name: string,
       amount: {
         value: number,
         unit: string
       },
       add: string,
       attribute: string
     },
     
  ],
  yeast:string
},
food_pairing: string[],
brewers_tips:string,
contributed_by: string} */

@Injectable({
  providedIn: 'root'
})
export class CervezaGetterService {
  private url: string = 'https://api.punkapi.com/v2/beers?page=5&per_page=10';

  
  constructor(private http: HttpClient) { }

  getInfoCerveza() {
    return this.http.get(this.url)
  }

 
}
