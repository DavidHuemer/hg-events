import {BaseCollectionDashboardPage} from "./BaseCollectionDashboardPage";
import {BaseEntity} from "../../core/models/basics/BaseEntity";
import {RxState} from "@rx-angular/state";
import {AdminGlobalState} from "../../core/states/AdminGlobalState";
import {CollectionLoadingState} from "../../core/basics/loader/CollectionLoadingHandler";
import {BaseFirebaseService} from "../../core/services/basics/BaseFirebaseService";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

export abstract class BaseEditableCollectionDashboardPage<T extends BaseEntity, DTO> extends BaseCollectionDashboardPage<T> {
  edit$: Subject<T> = new Subject<T>();

  protected constructor(globalState: RxState<AdminGlobalState>, state: RxState<CollectionLoadingState<T>>,
                        firebaseReceiver: BaseFirebaseService<T, DTO>,
                        private router: Router, private route: ActivatedRoute) {
    super(globalState, state, firebaseReceiver);

    this.edit$.subscribe(entity => {
      this.router.navigate([entity.id], {relativeTo: this.route});
    });
  }
}
