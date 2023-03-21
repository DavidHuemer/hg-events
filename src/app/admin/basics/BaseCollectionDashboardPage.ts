import {BaseDashboardPage} from "./BaseDashboardPage";
import {RxState} from "@rx-angular/state";
import {AdminGlobalState} from "../../core/states/AdminGlobalState";
import {CollectionLoadingHandler, CollectionLoadingState} from "../../core/basics/loader/CollectionLoadingHandler";
import {Observable, Subject} from "rxjs";
import {LoadableContainerStatus} from "../../shared/components/loadable-list/loadable-list.component";
import {BaseFirebaseReceiver} from "../../core/services/basics/BaseFirebaseReceiver";
import {BaseEntity} from "../../core/models/basics/BaseEntity";

export abstract class BaseCollectionDashboardPage<T extends BaseEntity> extends BaseDashboardPage {

  status$: Observable<LoadableContainerStatus>;
  public delete$: Subject<T> = new Subject<T>();
  protected loadingHandler: CollectionLoadingHandler<T>;

  public content$: Observable<T[]>;

  protected constructor(globalState: RxState<AdminGlobalState>, state: RxState<CollectionLoadingState<T>>,
                        firebaseReceiver: BaseFirebaseReceiver<T>) {
    super(globalState);
    this.loadingHandler = new CollectionLoadingHandler<T>(state);
    this.status$ = this.loadingHandler.getStatus();
    this.content$ = this.loadingHandler.getContent();

    this.loadingHandler.load(firebaseReceiver.getAll());

    this.delete$.subscribe(entity => {
      if (confirm("Are you sure to delete " + this.getNameOfEntity(entity))) {
        firebaseReceiver.delete(entity.id);
      }
    });
  }


  abstract getNameOfEntity(entity: T): string;
}
