export interface LoadableState<T> {
  isLoading: boolean;
  loadedContent: T | null;
}

export interface LoadableListState<T> extends LoadableState<T> {

}

