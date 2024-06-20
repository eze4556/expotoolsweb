import {
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonList,
  IonCardContent,
  IonToolbar,
  IonTitle,
  IonHeader, IonBackButton,IonFabButton, IonButtons, IonSpinner, IonImg, IonFab, IonModal } from '@ionic/angular/standalone';
import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../common/services/firestore.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Marca } from '../../common/models/marca.model';

@Component({
  selector: 'app-afip',
  templateUrl: './afip.component.html',
  styleUrls: ['./afip.component.scss'],
  standalone: true,
  imports: [IonModal, IonFabButton, IonImg, IonSpinner, IonButtons, IonBackButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonFab,
     IonIcon,
    IonLabel,
    IonContent,
    IonGrid,
    IonFabButton,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonCardContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AfipComponent implements OnInit {
  userId: string;
  afip: any;

  marcas: Marca[] = [];

  constructor(private firestoreService: FirestoreService) {}

 async ngOnInit() {
    this.marcas = await this.firestoreService.getMarcas();
  }



}
