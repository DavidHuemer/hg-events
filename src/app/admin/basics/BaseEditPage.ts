import {RxState} from "@rx-angular/state";
import {map, Subject, withLatestFrom} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {BaseFirebaseService} from "../../core/services/basics/BaseFirebaseService";
import {FormGroup} from "@angular/forms";
import {BaseLoadDashboardPage} from "./BaseLoadDashboardPage";
import {AdminGlobalState} from "../../core/states/AdminGlobalState";
import {LoadingState} from "../../core/basics/loader/LoadingHandler";
import {BaseEntity} from "../../core/models/basics/BaseEntity";

export interface EditPageState<T> extends LoadingState<T> {
  itemId: string;
}

export abstract class BaseEditPage<T extends BaseEntity, R> extends BaseLoadDashboardPage<T> {
  save$: Subject<void> = new Subject();
  cancel$: Subject<void> = new Subject<void>();

  private route: ActivatedRoute;
  private service: BaseFirebaseService<T, R>

  protected constructor(globalState: RxState<AdminGlobalState>, state: RxState<EditPageState<T>>,
                        service: BaseFirebaseService<T, R>, route: ActivatedRoute) {
    super(globalState, state);
    this.service = service;
    this.route = route;
    this.setupCancel();
    this.setupSave();

    this.content$.subscribe(entity => {
      this.updateForms(entity);
    });
  }

  protected setup() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.load(this.service.getById(id));
  }

  private setupCancel() {
    this.cancel$.pipe(
      withLatestFrom(this.content$),
      map(([_, item]) => item)
    ).subscribe(item => this.updateForms(item));
  }

  private setupSave() {
    this.save$.pipe(
      withLatestFrom(this.content$),
      map(([_, entity]) => entity),
      map((entity: T) => ({item: this.createDto(), id: entity.id}))
    ).subscribe(x => {
      console.log('update');
      this.service.update(x.id, x.item);
    });
  }

  protected abstract createFormGroup(): FormGroup;

  protected abstract updateForms(item: T): void;

  protected abstract createDto(): R;
}
