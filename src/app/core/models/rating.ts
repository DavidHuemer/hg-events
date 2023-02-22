import { Timestamp } from "@angular/fire/firestore";

export interface Rating {
  autor: string;
  title: string;
  message: string;
  rating: number;
  date: Timestamp;
}
