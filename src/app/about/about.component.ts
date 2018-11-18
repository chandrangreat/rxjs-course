import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { timer, fromEvent, Observable, noop, of, interval, concat  } from 'rxjs';
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
    const source1$ = interval(1000);
    const source2$ = of(4, 5, 6);
    const source3$ = of(7, 8, 9);

    const result$ = concat(source1$, source2$, source3$);

    result$.subscribe(console.log);
  }

}


