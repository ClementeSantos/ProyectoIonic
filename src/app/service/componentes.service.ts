import { Injectable } from '@angular/core';
import { Componente } from '../model/componente'



@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  componentes: Componente[];

  constructor() {
    this.componentes = [
      {
        "item": "RTX 2080",
        "price": "918€",
        "stars": [1,1,1,1,1],
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/22/222504/1.jpg",
      },
      {
        "item": "GTX 1080Ti",
        "price": "500€",
        "stars": [1,1,1,1],
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/22/223678/1.jpg",
      },
      {
        "item": "RTX 2060",
        "price": "368€",
        "stars": [1,1,1,1],
        "image":"https://thumb.pccomponentes.com/w-530-530/articles/18/181129/6.jpg",
      },
      {
        "item": "GTX 1650",
        "price": "160€",
        "stars": [1,1,1],
        "image":"https://thumb.pccomponentes.com/w-530-530/articles/19/199277/7.jpg",
      },
      {
        "item": "Disco duro ssd 500gb",
        "price": "70€",
        "stars": [1,1,1,1],
        "image":"https://thumb.pccomponentes.com/w-530-530/articles/16/160723/suv500-120g-s-hr.jpg",
      },
      {
        "item": "Disco duro ssd 120gb",
        "price": "30€",
        "stars": [1,1,1],
        "image":"https://thumb.pccomponentes.com/w-530-530/articles/16/160723/suv500-120g-s-hr.jpg",
      },
      {
        "item": "ram 8 gb cl16",
        "price": "47€",
        "stars": [1,1,1,1,1],
        "image":"https://thumb.pccomponentes.com/w-530-530/articles/16/165305/1.jpg",
      },
      {
        "item": "Kingston DataTraveler 50 8GB USB 3.1",
        "price": "10€",
        "stars": [1,1,1],
        "image":"https://thumb.pccomponentes.com/w-530-530/articles/10/103117/kingston-datatraveler-50-8gb-usb-3-1.jpg",
      },
      {
        "item": "Asus PRIME B360M-A",
        "price": "80€",
        "stars": [1,1,1],
        "image":"https://thumb.pccomponentes.com/w-530-530/articles/16/161195/d1.jpg",
      },
      {
        "item": "Gigabyte B365M-DS3H",
        "price": "75€",
        "stars": [1,1,1,1],
        "image":"https://thumb.pccomponentes.com/w-530-530/articles/22/229366/1-1.jpg",
      }
    ]
  }

  getComponents(): Componente[] {
    return this.componentes;
  }

}
