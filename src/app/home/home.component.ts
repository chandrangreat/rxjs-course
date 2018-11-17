import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {interval, Observable, of, timer, noop} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { createHttpObservable } from '../common/util';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnersCourses$: Observable<Array<Object>>;

    advancedCourses$: Observable<Array<Object>>;

    ngOnInit() {

      const http$ = createHttpObservable('/api/courses');

      const courses$: Observable<Array<Object>> = http$.pipe(
        tap(() => console.log('Http request executed')),
        map( res => Object.values(res['payload'])),
        shareReplay()
      );

      this.beginnersCourses$ = courses$.pipe(
        map(courses => courses
            .filter(course => course['category'] === 'BEGINNER'))
      );

      this.advancedCourses$ = courses$.pipe(
        map(courses => courses
            .filter(course => course['category'] === 'ADVANCED'))
      );

      // Subscriptions will happen at the template level using async pipe
      // hence no nested subscription possible.

      // courses$.subscribe(
      //   courses => {

      //   },
      //   noop,
      //   () => console.log('completed')
      // );


    }

}
