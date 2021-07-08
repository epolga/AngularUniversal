import {Inject, Injectable, Optional, PLATFORM_ID} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Design} from '../model/design';
import {map} from 'rxjs/operators';
import {ALBUMS, DESIGNS} from '../../db-data';
import {Router} from '@angular/router';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';
import * as urlParse from 'url-parse';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class DesignsService {

  static readonly API_URL = 'https://angular-universal-course-94047.firebaseio.com';
  designs: any = Object.values(DESIGNS);
  albums: any = Object.values(ALBUMS);

  constructor(private http: HttpClient, private router: Router,
              @Inject(PLATFORM_ID) private platformId: any,
              @Optional() @Inject(REQUEST) protected request: Request,
              @Inject(DOCUMENT) private document: Document) {
  }

  getDesigns(): Observable<any>{
    const baseUrl = this.router.url;
 /*
    if (isPlatformServer(this.platformId) && this.request.hostname === 'localhost' && this.request.headers.referer) {
          console.log('server 1: ' + urlParse(this.request.headers.referer).hostname);
        }

    if (isPlatformServer(this.platformId)) {
          console.log('server 2: ' + this.request.hostname);
        } else {
          console.log('browser: ' + window.location.hostname);
        }
*/
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
    /*
    if (window == null)
    {
      console.log('window == null');
    } else{
      console.log('window != null');
      if (window.location == null)
      {
        console.log('window.location == null');
      } else
      {
        console.log('window.location != null');
        if (window.location.hostname == null)
        {
          console.log('window.location.hostname == null');
        } else {
          console.log('window.location.hostname == ', window.location.hostname);
        }
      }
    }
*/
    console.log('baseUrl = ', baseUrl);

    if (this.document.location.hostname.length === 0 ||
      this.document.location.hostname.includes('localhost') ||
      this.document.location.hostname.includes('10.0.0.9') ||
      this.document.location.hostname.includes('127.0.0.1')/*||
    !isPlatformServer(this.platformId) ||
      baseUrl.includes('localhost' )  ||
      baseUrl.startsWith('http://10.0.0.6:8080') ||
      baseUrl.startsWith('http://localhost:4200') ||
      baseUrl.startsWith('/')*/) {
      return of(this.designs);
    }

    return this.http.get<string>('/Designs');
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
      this.document.location.hostname.includes('10.0.0.9') ||
      this.document.location.hostname.includes('127.0.0.1')/*||
    !isPlatformServer(this.platformId) ||
      baseUrl.includes('localhost' )  ||
      baseUrl.startsWith('http://10.0.0.6:8080') ||
      baseUrl.startsWith('http://localhost:4200') ||
      baseUrl.startsWith('/')*/) {
      return of(this.albums);
    }

    return this.http.get<string>('/Albums');
  }
}
