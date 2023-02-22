import {doc, docData, Firestore, updateDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";

export abstract class BaseFirebaseService<T, R> {
  protected constructor(protected firestore: Firestore, protected collectionUrl: string) {
  }

  getById(id: string) {
    const url = `${this.collectionUrl}/${id}`
    const docRef = doc(this.firestore, url);
    return docData(docRef, {idField: 'id'}) as Observable<T>;
  }

  update(id: string, item: R) {
    const url = `${this.collectionUrl}/${id}`;
    const docRef = doc(this.firestore, url);

    return updateDoc(docRef, item);
  }
}
