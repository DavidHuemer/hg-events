import {Injectable} from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Equipment} from "../../models/equipment";
import {BaseFirebaseService} from "../basics/BaseFirebaseService";

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService extends BaseFirebaseService<Equipment, Equipment> {

  constructor(firestore: Firestore) {
    super(firestore, 'equipment');
  }

  public getEquipments(): Observable<Equipment[]> {
    const coll = collection(this.firestore, 'equipment');
    return collectionData(coll, {idField: 'id'}) as Observable<Equipment[]>;
  }
}
