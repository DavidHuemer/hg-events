import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {map, Observable} from "rxjs";
import {Rating} from "../../models/rating";

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(private firestore: Firestore) {
  }

  public getRatings(): Observable<Rating[]> {
    const coll = this.getCollection();
    const x = collectionData(coll);
    return x.pipe(
      map(documentDataArr => {
        return documentDataArr.map(documentData => documentData as Rating);
      }),
      map(ratings => ratings.sort((a,b) => b.date.seconds - a.date.seconds))
    );
  }

  addRating(rating: Rating) {
    const ratingsRef = this.getCollection();
    return addDoc(ratingsRef, rating);
  }

  private getCollection() {
    return collection(this.firestore, 'ratings');
  }
}
