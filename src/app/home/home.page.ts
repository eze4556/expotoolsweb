import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonFooter, IonSegment,IonCardHeader,  IonCardTitle, IonCardContent, IonCardSubtitle, IonSegmentButton, IonChip,IonAvatar, IonSearchbar,IonApp, IonTitle, IonContent, IonLabel, IonList, IonItem, IonCard, IonInput, IonSpinner, IonButtons, IonButton, IonIcon, IonImg, IonCol, IonRow, IonBackButton, IonGrid } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IoniconsModule } from '../common/modules/ionicons.module';
import { Router } from '@angular/router';
import { AlertController,  IonicModule } from '@ionic/angular';
import { FirestoreService } from 'src/app/common/services/firestore.service';
import { UserI } from '../common/models/users.models';
import { CommonModule } from '@angular/common';
import { Producto } from '../common/models/producto.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonGrid, IonBackButton, IonRow, IonCol, IonImg, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput,
    IonIcon, IonButton, IonButtons, IonSpinner, IonInput, IonCard,
    FormsModule,
    IoniconsModule,
    CommonModule,
    IonChip,
    IonAvatar,
IonFooter,
IonCardHeader,
    IonApp,
IonCardSubtitle,
    IonSearchbar,
    IonSegment, IonSegmentButton,
    IonCardTitle,
    IonCardContent
  ],
})
export class HomePage implements OnInit {

productos: Producto[] = [];

 currentSlide = 0;
  slides = [
    { img: 'assets/img/product1.jpg', alt: 'Product 1' },
    { img: 'assets/img/product2.jpg', alt: 'Product 2' },
    { img: 'assets/img/product3.jpg', alt: 'Product 3' },
  ];

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.slides.length - 1;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  openWhatsApp() {
  const whatsappNumber = '5491167554362'; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  window.open(whatsappUrl, '_blank');
}




  constructor( private router: Router,private firestoreService: FirestoreService,
    private alertController: AlertController,) {


  }






   async logout() {

    localStorage.removeItem('userId');
    localStorage.removeItem('userDni');
    this.router.navigateByUrl('/login');
    this.mostrarAlerta('Sesión cerrada correctamente.');
  }





  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'se ha cerrado la sesión',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateToCertificacion() {
    this.router.navigate(['/certificacion']);
  }

  navigateToFacturacion() {
    this.router.navigate(['/facturacion']);
  }

  navigateToPlanPago() {
    this.router.navigate(['/planpago']);
  }

  navigateToReciboSueldo() {
    this.router.navigate(['/recibosueldo']);
  }

 navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

navigateToAfip() {
    this.router.navigate(['/afip']);
  }

  navigateToF931() {
    this.router.navigate(['/F931']);
  }

   navigateToDeclaracion() {
    this.router.navigate(['/declaracion']);
  }

  user: UserI | undefined;
  userId: string | null = null;



 async ngOnInit() {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.user = await this.firestoreService.getUserData(this.userId);
      await this.mostrarAlertaBienvenida(this.user.nombre);
    }

this.cargarProductos();


  }

   async cargarProductos() {
    this.productos = await this.firestoreService.getProductos();
    console.log('Productos obtenidos:', this.productos);
  }


async mostrarAlertaBienvenida(nombre: string) {
    const alert = await this.alertController.create({
      header: '¡Bienvenidx!',
      message: `Hola, ${nombre}!`,
      buttons: ['OK']
    });

    await alert.present();
  }


  openLink(url: string) {
    window.open(url, '_blank');
  }


}



