import {doc, Firestore, updateDoc} from "@angular/fire/firestore";
import {BaseFirebaseReceiver} from "./BaseFirebaseReceiver";

export abstract class BaseFirebaseService<T, R> extends BaseFirebaseReceiver<T> {
  protected constructor(firestore: Firestore, collectionUrl: string) {
    super(firestore, collectionUrl);
  }

  update(id: string, item: R) {
    const url = `${this.collectionUrl}/${id}`;
    const docRef = doc(this.firestore, url);

    return updateDoc(docRef, item);
  }
}
