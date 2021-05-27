import { Services } from './../modules/services';
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
export class ServiceService {

  private idcollection: AngularFirestoreCollection<Services>;
  private dataService: Observable<Services[]>

  constructor(
    private dataBase: AngularFirestore 
  ) { 
    this.idcollection = dataBase.collection<Services>("service");
  }
  ReadAllDataServices(){
    this.dataService = this.idcollection.snapshotChanges().pipe(
      map((returnData) =>
        returnData.map((data) =>{
          const content = data.payload.doc.data() as Services;
          const id = data.payload.doc.id;
          return{
            id,
            ...content,
          };
        })
      )
    );
    return this.dataService;

  }
}
