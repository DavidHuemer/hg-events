import { Injectable } from '@angular/core';
import {Firestore, collection, collectionData} from "@angular/fire/firestore";
import {map, Observable} from "rxjs";
import {Equipment} from "../../models/equipment";

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {

  constructor(private firestore : Firestore) {

  }

  public getEquipments() : Observable<Equipment[]>{
    const coll = collection(this.firestore, 'equipment');
    const x = collectionData(coll);
    return x.pipe(
      map(documentDataArr => {
        return documentDataArr.map(documentData => documentData as Equipment);
      })
    );
  }
}
