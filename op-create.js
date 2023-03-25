import { Subject } from "rxjs";
import { combineLatest, from } from "rxjs";

const s1 = from(["a", "b", "c"]);

const s2 = from([1, 2, 3]);

const stream = combineLatest([s2, s1]);

function observer(message) {
  console.log(message);
}

stream.subscribe(observer);
