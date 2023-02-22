import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {map, Observable} from "rxjs";
import {Rating, RatingDto} from "../../models/rating";

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(private firestore: Firestore) {
  }

  public getRatings(): Observable<Rating[]> {
    const coll = this.getCollection();

    const ratingsObs = collectionData(coll, {idField: 'id'}) as Observable<Rating[]>;

    return ratingsObs.pipe(
      map(ratings => ratings.sort((a, b) => b.date.seconds - a.date.seconds))
    );
  }

  addRating(rating: RatingDto) {
    const ratingsRef = this.getCollection();
    return addDoc(ratingsRef, rating);
  }

  private getCollection() {
    return collection(this.firestore, 'ratings');
  }
}
