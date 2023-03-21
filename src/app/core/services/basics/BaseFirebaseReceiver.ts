import {collection, collectionData, deleteDoc, doc, docData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

/**
 * Base class that can receive and delete something from firebase
 * T: The type that should be received. For example Equipment.
 */
export abstract class BaseFirebaseReceiver<T> {
  protected constructor(protected firestore: Firestore, protected collectionUrl: string) {
  }

  public getAll(): Observable<T[]> {
    const coll = this.getCollection();
    return collectionData(coll, {idField: 'id'}) as Observable<T[]>;
  }

  public getById(id: string) {
    const docRef = this.getDocRef(id);
    return docData(docRef, {idField: 'id'}) as Observable<T>;
  }

  public delete(id: string) {
    const docRef = this.getDocRef(id);
    return deleteDoc(docRef);
  }

  protected getCollection() {
    return collection(this.firestore, this.collectionUrl);
  }

  protected getDocRef(id: string) {
    const url = `${this.collectionUrl}/${id}`
    return doc(this.firestore, url);
  }
}
