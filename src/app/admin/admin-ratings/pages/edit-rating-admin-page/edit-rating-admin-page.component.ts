import {Component, Inject, OnInit} from '@angular/core';
import {BaseEditPage, EditPageState} from "../../../basics/BaseEditPage";
import {Rating, RatingDto} from "../../../../core/models/rating";
import {RxState} from "@rx-angular/state";
import {RatingsService} from "../../../../core/services/ratings/ratings.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Timestamp} from "@angular/fire/firestore";
import {ADMIN_GLOBAL_RX_STATE, AdminGlobalState} from "../../../../core/states/AdminGlobalState";

interface EditRatingState extends EditPageState<Rating> {

}

@Component({
  selector: 'app-edit-rating-admin-page',
  templateUrl: './edit-rating-admin-page.component.html',
  styleUrls: ['./edit-rating-admin-page.component.scss'],
  providers: [RxState]
})
export class EditRatingAdminPageComponent extends BaseEditPage<Rating, RatingDto> implements OnInit {

  formGroup: FormGroup;
  autorForm: FormControl = new FormControl('', [Validators.required]);
  titleForm: FormControl = new FormControl('', [Validators.required]);
  messageForm: FormControl = new FormControl('');


  constructor(@Inject(ADMIN_GLOBAL_RX_STATE) globalState: RxState<AdminGlobalState>, state: RxState<EditRatingState>,
              private ratingsService: RatingsService, route: ActivatedRoute) {
    super(globalState, state, ratingsService, route);
    this.formGroup = this.createFormGroup();
  }

  ngOnInit(): void {
    this.setup();
  }

  protected getTitle(): string {
    return "Gästebucheintrag bearbeiten";
  }

  protected updateForms(item: Rating): void {
    this.autorForm.setValue(item.autor);
    this.titleForm.setValue(item.title);
    this.messageForm.setValue(item.message);
  }

  protected createFormGroup(): FormGroup {
    return new FormGroup<any>({
      autor: this.autorForm,
      title: this.titleForm,
      message: this.messageForm
    });
  }

  protected createDto(): RatingDto {
    return {
      autor: this.autorForm.value,
      title: this.titleForm.value,
      message: this.messageForm.value,
      rating: 5,
      date: Timestamp.now()
    };
  }
}
