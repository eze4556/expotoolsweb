import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonFooter,IonSegment,IonCardHeader, IonThumbnail, IonCardTitle, IonCardContent, IonCardSubtitle, IonSegmentButton, IonChip,IonAvatar, IonSearchbar,IonApp, IonTitle, IonContent, IonLabel, IonList, IonItem, IonCard, IonInput, IonSpinner, IonButtons, IonButton, IonIcon, IonImg, IonCol, IonRow, IonBackButton, IonGrid } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

import { IoniconsModule } from '../common/modules/ionicons.module';
import { Router } from '@angular/router';
import { AlertController,  IonicModule } from '@ionic/angular';
import { FirestoreService } from 'src/app/common/services/firestore.service';
import { UserI } from '../common/models/users.models';
import { CommonModule } from '@angular/common';
import { Producto } from '../common/models/producto.model';
import { Observable } from 'rxjs';
import { AuthService } from '../common/services/auth.service';




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

    IonThumbnail,
IonFooter,
IonCardHeader,
    IonApp,
IonCardSubtitle,
    IonSearchbar,
    IonSegment, IonSegmentButton,
    IonCardTitle,
    IonCardContent,

  ],
})
export class HomePage implements OnInit {

productos: Producto[] = [];
productosFiltrados: Producto[] = [];
producto: Producto | undefined;

 showMasInfo = false;
selectedProduct: any;
  user$: Observable<any | null> = this.authService.user$;


// Método para mostrar los detalles del producto al pasar el mouse
  showDetails(product: any) {
    this.selectedProduct = product;
  }

  // Método para ocultar los detalles del producto al quitar el mouse
  hideDetails() {
    this.selectedProduct = null;
  }

  openWhatsApp() {
  const whatsappNumber = '5491167554362';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  window.open(whatsappUrl, '_blank');
}


comprar() {
    const message = `Hola, estoy interesado en el producto ${this.producto.nombre}`;
    const whatsappUrl = `https://wa.me/5491167554362?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }



  constructor( private router: Router,private firestoreService: FirestoreService,
    private alertController: AlertController,private authService: AuthService) {


  }





logout() {
    this.authService.logout();
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

navigateToDetail(product:Producto){
  this.router.navigate(['/product', product.id]);
}







 async ngOnInit() {



await this.cargarProductos();

this.clearSearch();

  }

   closeSearchResults() {
    this.productosFiltrados = []; // Vacía el array de productos filtrados para ocultar la lista
  }

    clearSearch() {
    const searchbar = document.querySelector('ion-searchbar');
    if (searchbar) {
      searchbar.value = ''; // Reinicia el valor del ion-searchbar a una cadena vacía
    }
  }

 async cargarProductos() {
    this.productos = await this.firestoreService.getProductos();
    this.productosFiltrados = this.productos;
    console.log('Productos obtenidos:', this.productos);
  }


  search(event: any) {
    const query = event.target.value.toLowerCase();
    if (query.trim() === '') {
      this.productosFiltrados = [];
    } else {
      this.productosFiltrados = this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(query)
      );
    }
  }

  navigateToProduct(product: Producto) {
    // Implementa la navegación al detalle del producto si es necesario
    console.log('Navegar a producto:', product);
  }

   navigateTologin() {
    this.router.navigate(['/login']);
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



