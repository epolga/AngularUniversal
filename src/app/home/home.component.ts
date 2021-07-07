import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesService} from '../services/courses.service';
import {map, tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {Design} from '../model/design';
import {DesignsService} from '../services/designs.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses$: Observable<Course[]>;
  designs$: Observable<Design[]>;

  constructor(private coursesService: CoursesService,
              private designesService: DesignsService,
              private title: Title) {

    }

    ngOnInit(): void {

        this.title.setTitle('Angular University - All Courses');

        this.courses$ = this.coursesService.findAllCourses()
            .pipe(
                map(Object.values)
            );
        // const baseUrl = this.getBaseUrl();
        this.designs$ = this.designesService.getDesigns();
    }
/*
  getBaseUrl(): string {
    return document.getElementsByTagName('base')[0].href;
  }
 */
}
