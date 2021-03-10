import { HomepageModule } from './../modules/homepage-module';
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
export class HomePageService {

  private idcollection: AngularFirestoreCollection<HomepageModule>;
  private dataHomepage: Observable<HomepageModule[]>

  constructor(
    private dataBase: AngularFirestore 
  ) { 
    this.idcollection = dataBase.collection<HomepageModule>("HomePage");
  }
  ReadAllDataHomepage(){
    this.dataHomepage = this.idcollection.snapshotChanges().pipe(
      map((returnData) =>
        returnData.map((data) =>{
          const content = data.payload.doc.data() as HomepageModule;
          const id = data.payload.doc.id;
          return{
            id,
            ...content,
          };
        })
      )
    );
    return this.dataHomepage;
    console.log(this.dataHomepage);
  }
  
}
