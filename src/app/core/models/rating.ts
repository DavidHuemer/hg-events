import { Timestamp } from "@angular/fire/firestore";

export interface Rating extends RatingDto{
  id : string;
}

export interface RatingDto {
  autor: string;
  title: string;
  message: string;
  rating: number;
  date: Timestamp;
}
