import { map, Subject, tap } from "rxjs";
import { combineLatest, from } from "rxjs";

const s1 = new Subject();

const s2 = from([1, 2, 3]).pipe(
  tap((value) => console.log(`Original value is ${value}`)),
  map((value) => value + 10),
  tap((value) => console.log(`New value is ${value}`))
);

const stream = combineLatest([s1, s2]).pipe(
  tap((message) => console.log(message))
);

stream.subscribe();

s1.next("one");
s1.next("three");
