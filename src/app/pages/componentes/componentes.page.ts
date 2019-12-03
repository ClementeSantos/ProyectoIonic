import { Component, OnInit } from '@angular/core';
import { Componente } from '../../model/componente'
import { ComponentesService } from '../../service/componentes.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {

  componentes :Componente[];

  

  constructor(private service:ComponentesService) {

   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.componentes = this.service.getComponents();
    console.log(this.componentes);
  }



}