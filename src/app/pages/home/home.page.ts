import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotocomponentes(){
    this.router.navigate(['/componentes']);
  }
  gotonoticias(){
    this.router.navigate(['/noticias']);
  }
  gotocomentarios(){
    this.router.navigate(['/comentario']);
  }
  gotopromociones(){
    this.router.navigate(['/promociones']);
  }



}
