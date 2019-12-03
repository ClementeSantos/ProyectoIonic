import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async AlertaPromo() {
    const alert = await this.alertController.create({
      header: 'Ayuda',
      message: 'Para dirigirse a la promoción haga click en ella',
      buttons: ['OK']
    });

    await alert.present();
  }

}
