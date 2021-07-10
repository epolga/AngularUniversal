import {Inject, Injectable, Optional, PLATFORM_ID} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Design} from '../model/design';
import {map} from 'rxjs/operators';
import {ALBUMS, DESIGNS} from '../../db-data';
import {Router} from '@angular/router';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';
import * as urlParse from 'url-parse';
import { DOCUMENT } from '@angular/common';
import {LoadingService} from "../loading/loading.service";

@Injectable()
export class DesignsService {

  static readonly API_URL = 'https://angular-universal-course-94047.firebaseio.com';
  private designsSubject = new BehaviorSubject<Design[]>([]);
  designs$ = this.designsSubject as Observable<Design[]>;

  designsLocal: any = Object.values(DESIGNS);
  albums: any = Object.values(ALBUMS);
  designsClone: Design[] = [];
  designsResult: Design[] = [];
  constructor(private http: HttpClient, private router: Router,
              private loading: LoadingService,
              @Inject(PLATFORM_ID) private platformId: any,
              @Optional() @Inject(REQUEST) protected request: Request,
              @Inject(DOCUMENT) private document: Document) {
  }

  getDesigns(): Observable<Design[]>{
    if (this.document.location.hostname.length === 0 ||
      this.document.location.hostname.includes('localhost') ||
      this.document.location.hostname.includes('10.0.0.6') ||
      this.document.location.hostname.includes('127.0.0.1')
    ) {
      this.designsSubject.next(this.designsLocal);
      return this.designs$;
    }

    return this.http.get<Design[]>('/Designs');
  }

  getRandomDesigns(nDesigns: number): Observable<any>{
    if (this.document.location.hostname.length === 0 ||
      this.document.location.hostname.includes('localhost') ||
      this.document.location.hostname.includes('10.0.0.6') ||
      this.document.location.hostname.includes('127.0.0.1')
    ) {

      if (this.designsClone.length === 0)
      {
        this.designsClone = this.designsLocal.slice();
      }

      for (let i = 0; i < nDesigns; i++)
      {
        console.log('i = ', i);
        const nRandom: number = Math.floor(Math.random() * this.designsLocal.length);
        const rndDesign = this.designsLocal[nRandom];
        this.designsResult.push(rndDesign);
        this.designsLocal.splice(nRandom, 1);
      }
      this.designsSubject.next(this.designsResult);
      return this.designs$;
    }

    return this.http.get<Design[]>('/Designs');
  }

  getNextRandomDesigns(nDesigns: number): Observable<Design[]>{

    console.log('hostname = ', this.document.location.hostname);
    console.log('host = ', this.document.location.host);

    if (
        (
          this.document.location.host.length === 0 ||
          this.document.location.host.includes('localhost') ||
          this.document.location.host.includes('10.0.0.6') ||
          this.document.location.host.includes('127.0.0.1')
        )
        && !this.document.location.host.includes('44376')
      ){

      if (this.designsClone.length === 0)
      {
        this.designsClone = this.designsLocal.slice();
      }

      for (let i = 0; i < nDesigns; i++)
      {
        if (this.designsLocal.length === 0)
        {
          break;
        }

        const nRandom: number = Math.floor(Math.random() * this.designsLocal.length);

        const rndDesign = this.designsLocal[nRandom];
        this.designsResult.push(rndDesign);
        this.designsLocal.splice(nRandom, 1);
      }
      this.designsSubject.next(this.designsResult);
    }
    else {
      this.loading.loadingOn();
      this.http.get<Design[]>('/Designs/NextRandomDesigns?nDesigns=3')
        .subscribe(result => {
          this.loading.loadingOff();
          this.designsResult = this.designsResult.concat(result);
          this.designsSubject.next(this.designsResult);

          }
        );
    }
    return this.designs$;
  }

  getAlbums(): Observable<any>{
    const baseUrl = this.router.url;

    if (isPlatformServer(this.platformId))
    {
      console.log('isPlatformServer');
    }
    else {
      console.log('!isPlatformServer');
    }
    if (this.document.location == null){
      console.log('document.location == null');
    } else {
      if (this.document.location.hostname == null)
      {
        console.log('this.document.location.hostname == null');
      }
      else {
        console.log('this.document.location.hostname = <' +  this.document.location.hostname + '>');
      }
    }

    console.log('baseUrl = ', baseUrl);

    if (this.document.location.hostname.length === 0 ||
      this.document.location.hostname.includes('localhost') ||
      this.document.location.hostname.includes('10.0.0.6') ||
      this.document.location.hostname.includes('127.0.0.1')
    ) {
      return of(this.albums);
    }

    return this.http.get<string>('/Designs/Albums');
  }
}
