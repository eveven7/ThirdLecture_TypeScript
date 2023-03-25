import { from, tap, filter, map } from "rxjs";
/**
 * There's an array of numbers.
 * Write an observable, that takes the array as an input stream and only logs the ones that are > 50.
 * The output should be a stream of strings;
 */
const ids = new Array(50).fill("").map(() => {
  const rand = Math.random() * 100;
  return Math.floor(rand);
});

console.log(`Input: ${ids}`);

const objectas = of({
  title: '',
  name: '',
  age: ''
})

objectas.pipe(map((data) => data.title)).subscribe(console.log);

from(ids).pipe(
    filter((value) => value > 50),tap((value) => console.log(value)))
    .subscribe();
