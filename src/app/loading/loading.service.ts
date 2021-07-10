import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, of} from 'rxjs';
import {concatMap, finalize, tap} from 'rxjs/operators';


@Injectable()
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {
    console.log('Loading service created ...');
  }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    console.log('showLoaderUntilCompleted');
    return of(null)
      .pipe(
        tap(() => this.loadingOn()),
        concatMap(() => obs$),
        finalize(() => this.loadingOff())
      );
  }

  loadingOn(): void {
    console.log('Loading On ...');
    this.loadingSubject.next(true);

  }

  loadingOff(): void {
    console.log('Loading off ...');
    this.loadingSubject.next(false);
  }

}
