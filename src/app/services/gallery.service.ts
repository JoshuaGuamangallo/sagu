import { GalleryModule } from './../modules/gallery-module';
import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable, pipe, of, BehaviorSubject } from "rxjs";
import { map, finalize } from "rxjs/operators";
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private idcollection: AngularFirestoreCollection<GalleryModule>;
  private datagallery: Observable<GalleryModule[]>

  constructor(
    private dataBase: AngularFirestore 
  ) { 
    this.idcollection = dataBase.collection<GalleryModule>("gallery");
  }
  ReadAllDatagallery(){
    this.datagallery = this.idcollection.snapshotChanges().pipe(
      map((returnData) =>
        returnData.map((data) =>{
          const content = data.payload.doc.data() as GalleryModule;
          const id = data.payload.doc.id;
          return{
            id,
            ...content,
          };
        })
      )
    );
    return this.datagallery;

  }
}
