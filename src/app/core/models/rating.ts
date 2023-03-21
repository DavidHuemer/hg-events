import {Timestamp} from "@angular/fire/firestore";
import {BaseEntity} from "./basics/BaseEntity";

export interface Rating extends RatingDto, BaseEntity {
}

export interface RatingDto {
  autor: string;
  title: string;
  message: string;
  rating: number;
  date: Timestamp;
}
