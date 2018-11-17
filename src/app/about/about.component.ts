import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { timer, fromEvent, Observable, noop  } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //  const interval$ = timer(3000, 1000);

    //  const sub = interval$.subscribe(val => console.log('stream 1 ' + val));

    //   setTimeout(() => sub.unsubscribe(), 6000);

    //  const click$ = fromEvent(document, 'click');

    //  click$.subscribe(
    //    evt => console.log(evt),

    //    err => console.log(err),

    //    () => console.log('completed')
    //  );

    // const http$ = createHttpObservable('/api/courses');

    // const courses$ = http$.pipe(
    //   map( res => Object.values(res['payload']))
    // );

    // courses$.subscribe(
    //   courses => console.log(courses),
    //   noop,
    //   () => console.log('completed')
    // );
  }

}


