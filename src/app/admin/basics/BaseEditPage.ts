import {RxState} from "@rx-angular/state";
import {map, Observable, Subject, withLatestFrom} from "rxjs";
import {LoadableDashboardPage, LoadableState} from "./LoadableDashboardPage";
import {ActivatedRoute} from "@angular/router";
import {BaseFirebaseService} from "../../core/services/basics/BaseFirebaseService";
import {FormGroup} from "@angular/forms";

export interface EditPageState<T> extends LoadableState {
  item: T;
  itemId: string;
}

export abstract class BaseEditPage<T, R> extends LoadableDashboardPage {
  public item$: Observable<T>;
  save$: Subject<void> = new Subject();
  cancel$: Subject<void> = new Subject<void>();

  public abstract formGroup: FormGroup;

  private state: RxState<EditPageState<T>>;
  private route: ActivatedRoute;
  private service: BaseFirebaseService<T, R>;

  protected constructor(state: RxState<EditPageState<T>>, service: BaseFirebaseService<T, R>, route: ActivatedRoute) {
    super(state);
    this.state = state;
    this.route = route;
    this.service = service;
    this.item$ = state.select('item');

    this.cancel$.pipe(
      withLatestFrom(this.item$),
      map(([_, item]) => item)
    ).subscribe(item => this.updateForms(item));

    this.save$.pipe(
      withLatestFrom(this.state.select('itemId')),
      map(([_, id]) => id),
      map((id) => ({item: this.createDto(), id: id}))
    ).subscribe(x => {
      this.service.update(x.id, x.item);
    });
  }

  protected setup() {
    this.formGroup = this.createFormGroup();

    const id = this.route.snapshot.paramMap.get('id') as string;
    this.state.set({itemId: id});

    const ratingLoader = this.service.getById(id);

    this.state.connect('item', ratingLoader);

    ratingLoader.subscribe(rating => {
      this.state.set({isLoading: false});
      this.updateForms(rating);
    });
  }

  protected abstract createFormGroup(): FormGroup;

  protected abstract updateForms(item: T): void;

  protected abstract createDto(): R;
}
