/**
 * Subscribe to input$ and output all passed
 * values as an array when the observable completes.
 */
import {Subject, toArray} from "rxjs";

const input$ = new Subject();
let timePassed = 0;
const interval = setInterval(() => {
    const id = Math.random().toString(36).substring(6);
    input$.next(id);
    timePassed += 100;

    if (timePassed > 5000) {
        clearInterval(interval);
        input$.complete();
    }
}, 100);

input$.pipe(toArray()).subscribe({next:value => console.log(value)});


