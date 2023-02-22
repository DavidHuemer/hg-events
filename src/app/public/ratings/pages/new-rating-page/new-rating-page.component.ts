import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Rating} from "../../../../core/models/rating";
import {Timestamp} from "@angular/fire/firestore";
import {RatingsService} from "../../../../core/services/ratings/ratings.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-rating-page',
  templateUrl: './new-rating-page.component.html',
  styleUrls: ['./new-rating-page.component.scss']
})
export class NewRatingPageComponent implements OnInit {

  ratingEnabled: boolean = true;
  ratingNumber: number = 5;

  autorForm: FormControl = new FormControl('', [Validators.required]);
  titleForm: FormControl = new FormControl('', [Validators.required]);
  messageForm: FormControl = new FormControl('');

  newRatingFormGroup: FormGroup;

  constructor(private ratingsService : RatingsService, private router: Router, private _activatedRoute:ActivatedRoute) {
    this.newRatingFormGroup = new FormGroup({
      'autor': this.autorForm,
      'title': this.titleForm,
      'message': this.messageForm
    });
  }

  ngOnInit(): void {
  }

  async addRating(){
    const rating : Rating = {
      autor: this.autorForm.value,
      title: this.titleForm.value,
      message: this.messageForm.value,
      rating: this.getRating(),
      date: Timestamp.now()
    };

    await this.ratingsService.addRating(rating);

    this.router.navigate(["../"],{relativeTo:this._activatedRoute})
  }

  private getRating(){
    if(this.ratingEnabled){
      return this.ratingNumber;
    }else{
      return -1;
    }
  }
}
